const {PORT, DATA_PATH} = require('./config.js'); 
const express = require('express');
const fileUpload = require('express-fileupload'); 
const path = require('path'); 
const cors = require('cors'); 

//ROUTES 
const root = require('./routes/root.js'); 
const files = require('./routes/files.js');
const upload = require('./routes/upload.js'); 

const app = express(); 

//middlewares
app.use(cors()); 
app.use(fileUpload({
  limits: {
    fileSize: 200000000 
  }, 
  abortOnLimit: true, 
  limitHandler: (req, res, next) => {
    res.status(413).json({"Error": "The request file size exceeds the limits"}); 
  }
})); 

app.use('/', express.static('public')); 
app.use('/upload', upload);
app.use('/files', files); 
app.use('/isAlive', (req, res) => {
  res.status(200).send(); 
}); 

app.listen(PORT, () => {
  console.log('listening on http://localhost:3000'); 
}); 
