---
id: adding-field-DB
title: Add field to DB model
---

### Introduction

As you know, before using **mongoDB** databases, you should first define a model **schema**. 
The schema defines the model’s **data types** and enables you to take actions related to the DB (save, delete, update, etc.).

Schemas defined using **mongoose** provide a straightforward, schema-based solution through which you can model your application data. 
For more information on mongoose, see the official [docs](https://mongoosejs.com).

:::note
For the example below, we will take a look at the **User** schema, located in **server > models > User.js**.
:::

### Example
Once in the User.js file, you’ll find a few things:

- **User schema**.
- **Password encryption function**.
- **Token generator function**.
- **Find user by credentials function**.

<br/>

#### User schema example

```javascript
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
  resetToken: String,
  resetTokenExpiration: Date,
});
```

<br/>

:::note
To make use of a new data field on the server, please add a corresponding schema first. 
Only then should you use it as you wish. 
Be aware that creating a definitely new model is also a possibility.
:::



