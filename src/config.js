const path = require('path'); 

const FOLDER_NAME = 'files';  


module.exports = {
  PORT: 3000, 
  DATA_PATH: path.join(__dirname, FOLDER_NAME)
}
