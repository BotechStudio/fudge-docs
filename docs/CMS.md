---
id: CMS
title: CMS
---

### Introduction

We have implemented a simple and easy-to-update **Control Management System** (CMS) within Fudge. The CMS helps the platform admin track, update, and delete data directly from the DB, while managing all **collections**.

To view the admin section, please navigate to the **admin** root folder.

:::note
More comprehensive overview can be found at the **Project structure** section.
:::

### Add new collection

To properly use the **CMS**, ensure that the app collections are added to the admin’s CMS. Below you will find explanations on how this is done. As an example, we will implement a product collection. Please make sure to create a [Schema](./adding-field-DB.md) before continuing to read this guide.

First, we will create a product connector in **server > connectors**. It will handle all of our **server** logic. The connector should be a class and extend the base connector. The base connector that we are extending to create our new product connector handles simple operations, such as: get, create, update, etc.

```javascript
const getDB = require("../models/index.js");

module.exports = class BaseConnector {
  constructor(model, options = {}) {
    this.model = getDB(model);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.ftpConfig = options.ftpConfig;
  }

  normalizeValues(data) {
    const result = {};
    Object.keys(data).forEach((key) => {
      let value = data[key];
      if (value === "undefined") {
        value = undefined;
      }
      result[key] = value;
    });
    return result;
  }

  get(filters) {
    const query = this.model.find();
    if (filters.id) {
      query.where("_id").equals(filters.id);
    }
    return query.exec();
  }

  remove(data) {
    return this.model.findByIdAndRemove(data).exec();
  }

  constructUpdateQuery(data) {
    const query = {
      $set: {},
    };

    Object.keys(data).forEach((key) => {
      let value = data[key];
      if (value === "undefined") {
        query["$unset"] = query["$unset"] || {};
        query["$unset"][key] = 1;
      } else {
        query["$set"][key] = value;
      }
    });
    return query;
  }

  create(id, data) {
    if (!id) {
      delete data._id;
      console.log("base: ", data);
      return this.model.create(data);
    } else {
      const query = this.constructUpdateQuery(data);
      return this.model.findByIdAndUpdate(id, query).exec();
    }
  }
};
```

There is no need to create other connectors, merely to implement those operations. However, to create new operations, such as to receive a single document from the DB, you will have to create a new connector that contains the corresponding logic.

```javascript
class ProductsConnector extends BaseConnector {
  constructor(props) {
    super(props);
  }

  get(filters) {
    const query = this.model.find({ _id: props.id });
    query.select({ __v: 0 });
    return query.exec();
  }
}
```

In the above example, the `ProductsConnector` retrieves a specific document from the Products collection. Feel free to add additional functionalities to the connector (such as remove, update, etc.), as you see fit.

Once we created the relevant connector, we must move on and create a route inside **server > controllers > data.js**.

```javascript
exports.fetch = function (req, res) {
  const { isAdmin } = req.user;
  if (!isAdmin) return res.send("User is not admin");

  if (!req.query.collection) return res.send("error");

  const queryField = req.query.collection;
  const model = getConnector(queryField);
  const query = model.get(req.query);

  query
    .then(function (docs) {
      res.json(docs);
    })
    .catch((e) => {
      res.status(500).send("Internal server error");
    });
};
```

Note that, for security reasons, you must make sure to add an admin **authentication**, so that other users cannot reach this route. Use the `isAdmin` field like in the example above. More information on admin authentication can be found in the **auth middleware** section.

As you can see, we are using the corridor we just created to receive the **docs** (which can be changed to any other logic or purpose).

Make sure to add the route to the admin router, located in server > router > admin.js. More on routes can be found [here](./add-end-point.md).

### Update the UI

After you’ve finished setting up the **end-point connectors**, continue to the UI.
Generally, you can choose how to display your data. <br />

In this section, we will take a look at the **front-end** and will display the data received back from the server.

:::note
Please navigate to **admin > app > models** and create a folder called “Products.” All of the UI will be implemented within this folder.
:::

Once inside the folder, create four files:

- schema.js
- products.js
- product.js
- index.js

For the purpose of this example, open **schema.js** and add some code inside:

```javascript
import {
  TextField,
  BooleanField,
  LabelField,
} from "../../../app/components/Fields";
const Schema = {
  email: {
    functionComponent: (props) => TextField(props),
    formatName: "Email",
  },
  isAdmin: {
    functionComponent: (props) => BooleanField(props),
    formatName: "Is admin",
  },
  default: {
    functionComponent: (props) => LabelField(props),
  },
};
```

As you can see, we are importing some input **components** (which can be replaced with any type of components you wish). These **inputs** will be placed within the view of any item received from the server.
Make sure to have a default field that will return the generic label. If you wish, you can program the format name to be displayed in the app.

The **products.js** file displays all of the data obtained from the server, in the manner of your choosing (list, table, etc.).

Open the **product.js** file and create a **react component**. Next, please import the **schema** from schema.js, as in the example below. Every time you click on a selected data structure document, a product component will be opened. The product component will use the **components** that were imported to schema.js.

```javascript
const constructFields = () => {
  const rows = Object.keys(initialValues).map((key) => {
    const { formatName, functionComponent, ...props } =
      Schema[key] || Schema["default"];
    return (
      <FlexRow key={key}>
        <span>{formatName || capitalizeString(key)}</span>
        <span>
          {functionComponent({
            value: initialValues[key],
            refVal: register({ required: true }),
            name: key,
          })}
        </span>
      </FlexRow>
    );
  });
  return rows;
};
```

Open the **index.js** file and import product.js and products.js. This “container” file will make the switch between the two and ensure that selected documents will only be shown with schema components. The implementation looks something like this:

```javascript
{
  view === "products" ? (
    <Products products={users} onView={showForm} />
  ) : (
    <Product initialValues={item} saveItem={saveItem} deleteItem={deleteItem} />
  );
}
```

When you click on one of the documents, an editable form containing specific doc details will open.

:::info
A full example can be found in **admin > app > models > users**. The Fudge team implemented all of the above logic within this folder.

:::
