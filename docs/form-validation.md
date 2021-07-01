---
id: form-validation
title: Form validation
---

### Introduction

To create simple and secure form validations, the Fudge team uses the [react-hook-form](https://react-hook-form.com) validation package.

the react-hook-form package enable to create a flexible and extensible forms with easy to use validation.

:::note

Take a look at the reset password model of form validation, located in **client > app > components > ResetPassModel > index.js**.
:::

### Use case

As you can see, the “useForm” method provided by react-hook-form is imported to the top of the file:

```javascript
import { useForm } from "react-hook-form";
```

The `useForm` function uses three parameters as arguments:

```javascript
const { register, handleSubmit, errors } = useForm({
  validationSchema: createSchemaWithIntl(intl),
});
```

- **register** - a function that registers the specific input into the react-form-hook <code>ref={register}</code>.
- **handleSubmit** - a function that is activated upon the form’s submission.
- **errors** - errors that may occur during the form’s submission.

The **validation process** is composed of a few parts: the useForm, messages indicating validation errors, and validation rules. As seen above, the useForm hook handles the submission, receives notification of errors, and registers inputs into the form.

The validation messages are relayed to the resetPassModel form, located in **client > app > components > ResetPassModel > validation.js**. It defines the validation errors that may occur

```javascript
const messages = defineMessages({
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: "Email is required",
  },
  emailValid: {
    id: `${scope}.emailValid`,
    defaultMessage: "Email must be a valid email",
  },
});
```

The last part of the form validation is made up of the rules. The rules of our form are defined in **client > app > components > ResetPassModel > validation.js** and secure the validation’s shape.

```javascript
export const createSchemaWithIntl = (intl) => {
  return yup.object().shape({
    email: yup
      .string()
      .required(intl.formatMessage(messages.emailRequired))
      .email(intl.formatMessage(messages.emailValid)),
  });
};
```

As you can see, the shape was created using the [yup](https://www.npmjs.com/package/yup) package, a JavaScript schema builder for value parsing and validation.
