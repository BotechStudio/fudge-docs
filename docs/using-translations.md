---
id: using-translations
title: Localization
---

### Introduction

To enable **worldwide** use of Fudge, our team created a **localization system** capable of simultaneously supporting multiple languages.

Below you will learn how this localization system works, as well as how to change and update it to meet your needs.

:::note
This example will highlight form validation localization and localization strings. 
Please open **client > translations > en.json**, as well as **client > app > components > ResetPassModel > messages.js**.
:::

### The strings

As you can see, the en.json file includes English localized strings that are divided by section and field.

```javascript
  "hybrid.boilerplate.containers.ResetPassModal.email": "Email",
  "hybrid.boilerplate.containers.ResetPassModal.submit": "Submit"
```

Every line has a corresponding use in multiple places within the app.

For example, if you look at messages.js, you will notice the use of:

```javascript
export const scope = 'hybrid.boilerplate.containers.ResetPassModal';
```

This points to a specific **string set** in **en.json** and **de.json**.