---
id: handling-errors
title: Errors handling
---

### Introduction

As our applications grow, we continue to take measures to ensure our handling of errors becomes more elegant, clean, and efficient.
In doing so, we strive to prevent misunderstandings and wasted time.

The Fudge team created a simple and maintainable method for handling errors that uses **redux’s**s state and a general error model (that can be replaced).


### The state

At any given time, the application holds an “error” value that determines whether or not an end-user should be notified about errors taking place. 
This value is held in redux’s state.


The initial error state can be found in: <br/> **client > app > containers > App > reducer.js**

```javascript
export const initialState = {
  //other key:value pairs
  error: false,
  //other key:value pairs
};
```

### Error handling steps

Follow these steps to update the redux error state value:
- Create an action
- Create a constant
- Add a specific corresponding case in the reducer
- Dispatch the action with some event

For example:

**Action**
```javascript
export function setError() {
  return {
    type: SET_ERROR,
    error: true
  };
}
```

**Constant**
```javascript
export const SET_ERROR = 'boilerplate/App/SET_ERROR';
```

**Reducer**
```javascript
case RESET_ERROR:
        draft.error = action.error;
        break;
```

**Dispatch**
```javascript
onClick={() => dispatch(setError())}
```

### Use case

:::note

For the purpose of this use case/example, see the “signUpUser” handling flow, located in **client > app > containers, SignUpUser >sage.js**.

:::

As you can see, the API call was placed inside of the try/catch block. This, so that if something goes wrong with the server or the call to the end-point, an action can be activated to update the error’s state.

```javascript
yield put(userSignUpError(err));
```

the userSignUpError action was imported from actions.js as indicated at the top of the file:

```javascript
import { userSignUpError } from '../App/actions';
```

The action accepts the server response (so long as it exists), and decides what to return.

```javascript
export function userSignUpError(error) {
  try {
    const res = JSON.parse(String(error).slice(7));
    if (res.code === 11000) {
      return {
        type: SIGNUP_USER_ERROR,
        error: 'User Already Exists'
      };
    }
    return {
      type: SIGNUP_USER_ERROR,
      error,
    };
  } catch (e) {
    return {
      type: SIGNUP_USER_ERROR,
      error,
    };
  }
}
```

The error state is then updated to indicate to the end-user that something went wrong.