---
id: installation
title: Installation
---

### Intro

Congratulation, you are about to start using Fudge!
The installation is very easy and can be done in 3 different ways: Basic - Premium - Extended.
Installation script are based on npm and node modules are priorly required to be installed on your computer.

### Preconditions

1. Node.js is installed, If not, visit https://nodejs.org/.
2. MongoDB is installed, If not, visit https://mongodb.com/.
3. Yarn is installed, If not, visit https://yarnpkg.com/.

Make sure you downloaded the .zip file and extracted it with the password provided to the desired path.

### Getting started

:::note
For this guide, assume the extracted files are at '/fudgeProject'
:::

1. Navigate to the path where you extracted the .zip to and make sure the following files and folders exists (depending the license you've purchased)

   1. Case of Basic License - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
   2. Case of Premium License - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
   3. Case of Extended License - 4 Folders: admin, client, server, mockdata. 2 Files: init.js, package.json.

2. Open your terminal and navigate to the specific folder, for ex. to '/fudgeProject'.

3. Run `npm i`.

4. Once the installation is complete, navigate to the server folder '/fudgeProject/server' and run `npm run dev`.  
   The server is now up and running and you can see that your terminal states: 'Server running on port 8000'.

5. Open a second terminal window and navigate to the client folder '/fudgeProject/client' and run `npm start`.  
   The client is now up and running and you can see that your terminal states: 'Localhost: http://localhost:3000'.

6. With your browser navigate to 'http://localhost:3000' to see client side.

7. With you favorite IDE supporting JavaScript open the root folder '/fudgeProject' and start editing your application.
