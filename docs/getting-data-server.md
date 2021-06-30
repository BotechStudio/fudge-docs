---
id: getting-data-server
title: Getting data from server
---

### Introduction

The fudge application making heavy use of **redux-saga**, a modern library that aims to make application side effects (like data fetching and accessing the browser cache).

To fetch data from the server, the Fudge team created a simple workflow that is efficient and easy to maintain. This workflow uses redux-saga. 
To better understand how it works, read through the “userSignUp” flow below.


:::note 

The `signUpUser` function is located in **client > app > containers > signUpPage >saga.js**.
It takes care of the communication with the server.
The saga.js files holds the sign-up flow and activates the right actions, depending on the API’s call response.

:::

### Use case

Inside the saga.js files, you will find the sign-up flow, which communicates with the server. 
For instance, we can make an API call to a server end-point like so:


```javascript
const userData = yield call(request, requestURL, reqOptions);
```

The redux-saga “call” method receives the following arguments:

- **request** - a custom fetch function created by the Fudge team.
- **requestURL** - an end-point URL address.
- **reqOptions** - request options, such as: method, headers, etc.

:::note

Pay attention! “reqOptions” holds the request method. 
Please ensure you use the right method for your API call (GET, POST, PUT, etc.).

:::

The response will be stored in a constant variable called **userData**.
In addition, the request body that holds the email, password, and password confirmation, is sent as a string.

```javascript
body: JSON.stringify({
      email,
      password,
      confirmPassword
    })
```

The server expects to receive the body as a string. 
Parsing options can be found in the main app.js file, which is located inside the server folder. 
For more information on parsing in Express, see the official [docs](http://expressjs.com/en/api.html#req.body).


### Server and DB

In this case, the end-point URL is **“/users/signup,”** which is located in **server > controllers > user.js**.

The api call hits the end-point below:

```javascript
exports.signUp = async (req, res) => {
  try {
    const {
      password,
      confirmPassword
    } = req.body;

    if (password !== confirmPassword) throw new Error('Password is not matching');

    const user = new User(req.body);

    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(403).send(error);
  }
}
```

It also makes use of the **User** model schema (imported, at the top of the file).

As you can see, the credentials *were saved to the DB**. 
A token was generated and was sent back to the browser, along with the new user details. 
The end-point was built with a try/catch block, which indicates the existence of errors, and handles them accordingly.



