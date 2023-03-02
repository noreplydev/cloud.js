const {PORT, DATA_PATH} = require('./config.js'); 
const express = require('express');
const fileUpload = require('express-fileupload'); 
const path = require('path'); 
const cors = require('cors'); 

//ROUTES 
const root = require('./routes/root.js'); 
const upload = require('./routes/upload.js');  
const files = require('./routes/files.js');
const stats = require('./routes/stats.js'); 

const app = express(); 

//middlewares
app.use(cors()); 
app.use(fileUpload()); 

app.use('/', root); 
app.use('/upload', upload); 
app.use('/files', files); 
app.use('/stats', stats); 

app.listen(PORT, () => {
  console.log('listening on http://localhost:3000'); 
}); 
