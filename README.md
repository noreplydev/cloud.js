
![cloudjs-banner](./assets/readme-banner.png | width=100)

# Cloud.js
Cloud.js is a web server that serves a react application that interacts with the server and allows viewing, downloading and uploading files to the server. Cloudjs was written in node with express. 

![cloudjs-banner](./assets/front.png | width=100)

### How to use
To use Cloud.js we need to clone the project from the `dist` branch. This branch is a ready-to-use project, this means that the project will be the server folder with the build of the react app on the public folder. 

To clone the project we can use 
```
git clone -b dist https://github.com/sanchez-cristian/cloud.js
```

With `npm run dev` we will start the server on the port 3000. This configuration and others can change on the .env file. The react app also uses a config file, so, to edit the front configurations we can edit on `/public/config.js`.


