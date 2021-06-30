---
id: auth-middleware
title: The auth middleware
---

### Introduction 

The Fudge team created a simple and secure authentication **process** that enables you to expose your logged-in users to sensitive information, 
while blocking access to users who are not logged in.

Below you will find all the information you need about this process, how it works and how you can update it to meet your needs.

:::note
Please navigate to **server > middleware > auth.js** and follow the steps below.
:::

### The auth logic

Inside the authentication (auth) file, you will find all the app’s **authentication logic**. 
In Fudge, we use the auth logic as middleware. See the official Express [docs](https://expressjs.com/en/guide/using-middleware.html) to learn more.

As you can see, the first step to take place is token validation. 
Fudge makes use of [JWT](https://jwt.io) to verify the user’s identity.

Once the token is taken from the request header, it can be verified as follows:

```javascript
const data = jwt.verify(token, process.env.JWT_KEY);
```

Verifying the token allows us to indicate whether or not the user has signed up, is logged in, or can be found in the DB.


### auth usage

the use of auth located inside the routes as an argument, example:

```javascript
router.post('/users/logout', auth, controller.logOut);
```

The example above can be found at **server > routers > user.js**.

### Admin auth

The auth process can also include admin authentication, which can be found in **server > controllers > data.js**.
These routes are protected, visible to admins only. This is caused by:

```javascript
const { isAdmin } = req.user
if(!isAdmin) return res.send('User is not admin')
```

As you can see, the user object was returned from the auth middleware. 
You can then check the ``isAdmin`` field; if it holds a positive value (is true), then the user is an admin and is granted access to the route.

