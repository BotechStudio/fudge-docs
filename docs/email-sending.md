---
id: email-sending
title: Email sending
---

### Introduction

There is an option for you to send emails to your users.
For example, we have prepared a "reset password" flow to demonstrate this ability.
Please refer the official [SendGrid](https://sendgrid.com/) doc for more information.

### Preconditions

1. Log in to [SendGrid](https://sendgrid.com/).
2. Create a sender identity (see https://app.sendgrid.com/guide).
3. Create SENDGRID_API_KEY (see https://app.sendgrid.com/guide/integrate/langs/nodejs).

### Getting started

:::note
For this example, assume the extracted files are in ‘/fudgeProject’
:::

1. Open '/fudgeProject/server/.env' and add SENDGRID_API_KEY variable there.  
  
2. Open ‘/fudgeProject/server/controllers/user.js’ and update the ‘msg’ variable with your verified sender information (msg.from).
You can also update your email subject and text here.

3. Restart the server to apply the changes.  

For more extended changes (reports, stats, dynamic templates) please check [SendGrid's](https://sendgrid.com/) documentation.
