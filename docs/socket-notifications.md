---
id: socket-notifications
title: Socket.io notifications
---

### Introduction

Fudge allows you to send a notification to specific or all users, when an event takes place. This push notification functionality was implemented with **Socket.io**.

The following is an example of how to set up a notification that tells a user that their item is ready, in just a few steps.

:::note

Please navigate to your project’s main **server** folder, before following the creation steps.

:::

### Setting up a new notification

1.1 Navigate to **server > services > socketServices.js**,

1.2 Create an event dictionary, with the key being capital letters and the value being lower case letters. For example:

```javascript
const events = {
  GENERATE_COMPLETE: "generate_complete",
};
```

### Sending the notification from the server side

2.1 Navigate to where you would like to send the notification form.
Import **events** and **sockets** like in the example below:

```javascript
const sockets = require("../events/sockets");
const { events: SocketEvents } = require("../services/socketService");
```

2.2 Using **emit** function by the **sockets** will throw a dispatch, you should transfer **'notify-user'** to notify a specific user or **'notify-users'** for notifying group of users.

1. User ID - The user identifier

2. Event type - Select from those listed under ‘Events Object,’ in socketServices.js.

3. Payload - The data to be sent to the user (optional. This can also be left empty).

```javascript
sockets.emit("notify-user", [
  user_id, // User ID
  SocketEvents.GENERATE_COMPLETE, // Event type
  user.products, //Payload
]);
```

### Receiving the notification on the user site

3.1 Navigate to **client > app > containers > App > constants.js**

3.2 Create and export a new constant.

```javascript
export const GENERATE_NEW_PROJECT_SUCCESS =
  "boilerplate/PRIVATE/GENERATE_NEW_PROJECT_SUCCESS";
```

3.3 Navigate to the app’s saga at **client > app > Containers > saga.js**.

3.4 Import the newly-created constant.

```javascript
import { GENERATE_NEW_PROJECT_SUCCESS } from "./constants";
```

3.5 Insert the **emit** call (as seen below) under the **Subscribe** function, with the constant in the Type field and the payload in the Data field, and send it to the user.

```javascript
function subscribe(socketParm) {
  return eventChannel((emit) => {
    socketParm.on("generate_complete", (payload) => {
      emit({ type: GENERATE_NEW_PROJECT_SUCCESS, data: payload });
    });
    return () => {};
  });
}
```

3.6 Navigate to the reducer in **client > app > containers > App > reducer.js**

3.7 Import the newly-created constant.

```javascript
import { GENERATE_NEW_PROJECT_SUCCESS } from "./constants";
```

3.8 Insert a new case under the **Produce function**. See an example of updating a **product’s** attributes below:

```javascript
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GENERATE_NEW_PROJECT_SUCCESS:
        draft.products = action.data;
        break;
    }
  });
```
