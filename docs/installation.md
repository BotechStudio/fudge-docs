---
id: installation
title: Installation
---

### Intro

Congratulations! You are ready to start using Fudge. The installation process is very easy. Choose from Basic, Premium, and Extended licensing packages and get started. Installation scripts are based on npm and node modules that must already be installed on your computer.

### Preconditions

1. Node.js is installed, If not, visit https://nodejs.org/.
2. MongoDB is installed, If not, visit https://mongodb.com/.
3. Yarn is installed, If not, visit https://yarnpkg.com/.

Please make sure you downloaded the .zip file and extracted it using the correct password.

### Getting started

:::note
For this guide, assume the extracted files are at '/fudgeProject'
:::

1. Navigate to the path to which you extracted the .zip and make sure the following files and folders exist, in accordance with the license you purchased:

   1. Basic License - 3 folders: client, servers, and mock data. 2 files: init.js and package.json
   2. Premium License - 3 folders: client, servers, and mock data. 2 files: init.js and package.json
   3. Extended License - 4 folders: admin, client, server, and mock data. 2 files: init.js and package.json

2. Open your terminal and navigate to the specific folder, for ex. to '/fudgeProject'.

3. Run `npm i`.

4. Once the installation is complete, navigate to the server folder '/fudgeProject/server' and run `npm run dev`.  
   The server is now up and running and you can see that your terminal states: 'Server running on port 8000'.

5. Open a second terminal window and navigate to the client folder '/fudgeProject/client' and run `npm run start`.  
   The client is now up and running and you can see that your terminal states: 'Localhost: http://localhost:3000'.

6. Using your browser, navigate to ‘http://localhost:3000’ to see the client side up and running.

7. Using your favorite IDE-supporting JavaScript, open the root folder ‘/fudgeProject’ and start editing your application.
