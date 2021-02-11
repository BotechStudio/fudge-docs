---
id: installation
title: Installation
---

### Intro

Congratulation, You are about to start using Fudge!
The installation is very easy and to be done in few types.
Installation script is based on npm and installs node modules into your project.

### Preconditions

1. Node.js is installed, If not, visit https://nodejs.org/.
2. MongoDB is installed, If not, visit https://mongodb.com/.
3. Yarn is installed, If not, visit https://yarnpkg.com/.

Make sure you downloaded the .zip file and extracted it with the password given to a desired path.

### Getting started

:::note
For this guide, assume the extracted files are at '/fudgeProject'
:::

1. Navigate to the path where you extracted the .zip to and make sure the following files and folders exists (depending the license you've purchased)

   1. Case of Basic Licence - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
   2. Case of Premium Licence - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
   3. Case of Extended Licence - 4 Folders: admin, client, server, mockdata. 2 Files: init.js, package.json.

2. Open terminal and navigate to the specific folder, for ex. to '/fudgeProject'.

3. Run `npm i`.

4. Once the installation completed, navigate to server folder '/fudgeProject/server' and run `npm run dev`.  
   The server is now up and you can see the line says 'Server running on port 8000'.

5. Open second terminal window and navigate to the client folder '/fudgeProject/client' and run `npm start`.  
   The client is now up and you can see the line says 'Localhost: http://localhost:3000'.

6. With your browser navigate to 'http://localhost:3000' to see client side.

7. With you favourite IDE supporting JavaScript open the root folder '/fudgeProject' and start editing your application.
