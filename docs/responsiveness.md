---
id: responsiveness
title: Responsiveness
---

### Introduction

To maintain Fudge’s reputation as a modern and useful boilerplate, the Fudge team created a responsive design for the entire app. The Fudge app can be used with mobile and other devices.

### Use case

When developing a responsive web app, there are many options and best practices to consider. For Fudge, we used the `@media` css query to determine the style to apply. It can be seen in client > app > components > Header > NavBar.js.

```javascript
 @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
```

<br/>

:::note
It is recommended to use **%** units, when developing a responsive design.
:::
