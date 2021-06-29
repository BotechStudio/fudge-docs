---
id: add-page
title: Add new page
---

:::note

Please navigate to the main client folder ('/fudgeProject/client') in your project before you start following the creation steps.

:::

### Introduction

As part of Fudge’s authentication process, the end-user is exposed to public and private pages.
Here’s how to add **public** and **private** pages in 2 simple steps:

### Step 1 - Creating a new page

1.1 Navigate to **client > app > containers**,

1.2 Create a container folder for the public page, for example it will be named NewPage.

1.3 Inside the container folder, create an index.js file with new file content (React component):

```javascript
import React from "react";

export function newPage() {
  return (
    <div>
      <h1>This is a new page</h1>
    </div>
  );
}
```

### Step 2 - Add a private/public route

2.1 Navigate to **client > app > containers > App > index.js** and import the container folder you just created into the imports section (on top).

```javascript
import { newPage } from "NewPage";
```

### How to add a public page

2.2 Inside index.js, create a route using **Route** method (imported) and place it between the `<Switch>` tags.

Please make sure you are using a unique path for the path prop and fill the component prop with the component you just imported.

```javascript
<Route path="/public-page/example" component={newPage} />
```

For more information about the "Route" or "Switch" methods please check the react-router official [docs](https://reactrouter.com).

### How to add a private page

2.2 Inside index.js, create a route using **PrivateRoute** method (imported) and place it between the `<Switch>` tags.

Please make sure you are using a unique path for the path prop and fill the component prop with the component you just imported.

```javascript
<PrivateRoute path="/private-page/example" component={newPage} />
```

See the [PrivateRoute](#privateroute-component) component documentation below.

### Loadable component

You can lazy-load your page using Loadable HOC. See examples by visiting other Fudge pages (PrivatePage, PublicPage).
The loadable component uses [React.lazy()](https://reactjs.org/docs/react-api.html#reactlazy) and [React.suspense()](https://reactjs.org/docs/react-api.html#reactsuspense).

### PrivateRoute component

The PrivateRoute component is built with `<Route />` and `<Redirect />`, which are provided by react-router. For more information on react-router methods, view the official [docs](https://reactrouter.com).
The component detects authenticated users by checking their redux state and deciding whether to grant access to the protected route, or to redirect to the login page instead.
You can find it in the **client > app > components > PrivateRoute** folder.
