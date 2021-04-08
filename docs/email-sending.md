---
id: email-sending
title: Email sending
---

### Intro

There is an option send emails to your users. As an example we have prepared reset password logic include this feature.
[SendGrid](https://sendgrid.com/) used for those purposes. 

### Preconditions

1. You need to be logged in to [SendGrid](https://sendgrid.com/).
2. Created a sender identity (see https://app.sendgrid.com/guide).
3. Created SENDGRID_API_KEY (see https://app.sendgrid.com/guide/integrate/langs/nodejs).

### Getting started

:::note
For this guide, assume the extracted files are at '/fudgeProject'
:::

1. Open '/fudgeProject/server/.env' and add SENDGRID_API_KEY variable there.  
  
2. Open '/fudgeProject/server/controllers/user.js' and update 'msg' variable with you verified sender (msg.from).  
You also able to update email subject and text here.

3. Restart the server to apply the chages.  

For more extended changes (reports, stats, dynamic templates) please check [SendGrid's](https://sendgrid.com/) documentation.
