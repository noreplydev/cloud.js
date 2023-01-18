const {PORT, DATA_PATH} = require('./config.js'); 
const express = require('express');
const fileUpload = require('express-fileupload'); 
const path = require('path'); 

//ROUTES 
const root = require('./routes/root.js'); 
const upload = require('./routes/upload.js');  
const files = require('./routes/files.js'); 

const app = express(); 

//statics
//./src/DATA_PATH
app.use(express.static(DATA_PATH)); 


//middlewares
app.use(fileUpload()); 

app.use('/', root); 
app.use('/upload', upload); 
app.use('/files', files)

app.listen(PORT, () => {
  console.log('listening on http://localhost:3000'); 
}); 
