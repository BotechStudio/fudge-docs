---
id: project-structure
title: Project structure
---

### Files structure tree

```
── root-directory
    ├── init.js
    ├── Licence
    ├── README.md
    ├── package.json
    ├── admin
    │   ├── app
    │   └── package.json
    ├── client
    │   ├── app
    │   └── package.json
    ├── server
        ├── app.js
        ├── db
        ├── controllers
        ├── routers
        ├── models
        ├── middleware
        └── package.json

```

### Admin overview

The **CMS** was built to enable the admins to control and manage the app data. The admin can update/modify/delete user data (can be switched to any collection), while remaining aware of any changes made on the app.

main parts:

- **Main app.js** - admin > app > app.js
- **Routes** - admin > app > containers > App > index.js
- **Screens** - admin > app > containers
- **Components** - admin > app > components
- **Global styles** - admin > app > global-styles.js
- **Main saga** - admin > app > containers > App > saga.js

### Client overview

The **front-end** was built with efficient code splitting and a maintainable structure that aims to dramatically cut time that is traditionally wasted, when starting a new project.

main parts:

- **Main app.js** - client > app > app.js
- **Routes** - client > app > containers > App > index.js
- **Screens** - client > app > containers
- **Components** - client > app > components
- **Global styles** - client > app > global-styles.js
- **Main saga** - client > app > containers > App > saga.js

### Server overview

The **back-end** was built using node & express js best practices. The most advanced node packages were applied.

main parts:

- **Main app.js** - server > app.js
- **Controllers** - server > controllers
- **DB** - server > db > db.js
- **Auth** - server > middleware > auth.js
- **Schema models** - server > models
- **Express routers** - server > routers
