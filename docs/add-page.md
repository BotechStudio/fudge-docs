---
id: add-page
title: Add new page
---

:::note

Please navigate to the main client folder ('/fudgeProject/client') in your project before you start following the creation steps.

:::

### Intro

As part of the Authentication proccess we implemented in Fudge, the end-user exposed to both **public** and **private** pages.

Here's how we can add **public** and **private** pages in 2 simple steps:

### Creating new page

1.1 Navigate to **client > app > containers**,

1.2 Create a container folder for the public page, for example it will be named NewPage.

1.3 Inside the container folder, create an index.js file with next file content (React component):

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

### Adding private/public route

2.1 Navigate to **client > app > containers > App > index.js**,
and import the container folder you just created at the imports section (top).

```javascript
import { newPage } from "NewPage";
```

### Add public page

2.2 Inside index.js, create a route using **Route** method (imported) and place it between the `<Switch>` tags.

Please make sure you are using a unique path for the path prop and fill the component prop with the component you just imported.

```javascript
<Route path="/public-page/example" component={newPage} />
```

For more information about the "Route" or "Switch" methods please check the react-router official [docs](https://reactrouter.com).

### Add privage page

2.2 Inside index.js, create a route using **PrivateRoute** method (imported) and place it between the `<Switch>` tags.

Please make sure you are using a unic path for the path prop and fill the component prop with the component you just imported.

```javascript
<PrivateRoute path="/private-page/example" component={newPage} />
```

See the [PrivateRoute](#privateroute-component) component documentation below.

### Loadable component

There are options to lazy load your page using Loadable HOC. You may see examples in other Fudge pages (PrivatePage, PublicPage). It is uses [React.lazy()](https://reactjs.org/docs/react-api.html#reactlazy) and [React.Suspense()](https://reactjs.org/docs/react-api.html#reactsuspense).

### PrivateRoute component

The PrivateRoute component built with `<Route />` and `<Redirect />` which provided by react-router, more about react-router methods can be found in the official [docs](https://reactrouter.com).  
The component detect's authenticated user's by checking redux state, and decide wether to give them access to the protected route, or to make a redirect to the login page instead.  
You can find it in the **client > app > components > PrivateRoute** folder.
