
const {Router} = require('express'); 
const path = require('path'); 
const fs = require('fs'); 


const {getQueryPath} = require('../utils/conversion.js'); 
const {rmPath} = require('../utils/fileManager.js'); 
const {DATA_PATH, DIRECTORY_DELIMITER} = require('../config.js'); 

const router = Router(); 

router.get('/:filepath?', async (req, res) => {
  const content = {
    files: [], 
    directories: []
  }

  const query = req.params.filepath || ''; // another path || root path 
  const requestPath = getQueryPath(query); 

  try {
    const entrys = await fs.promises.readdir(requestPath)
    entrys.forEach(entry => {
      const targetPath = path.join(requestPath, entry);
      const isDirectory = fs.lstatSync(targetPath).isDirectory();

      if (isDirectory) {
        content.directories.push(entry); 
      } else {
        content.files.push(entry); 
      }
    })
  } catch(err) {
    return res.status(404).json({
      "Error": "404 Resource not found."
    }); 
  } 
  
  return res.json({
    "root_directory": path.basename(DATA_PATH),
    "content": content, 
    "count": content.files.length + content.directories.length 
  }); 
});


router.delete('/:filepath?', async (req, res) => {

  const query = req.params.filepath || ''; // another path || root path
  const requestPath = getQueryPath(query); 

  try {
    const isDirectory = fs.lstatSync(requestPath).isDirectory(); 
    rmPath(requestPath, isDirectory, res);
  } catch(err) {
    console.log(err); 
    return res.status(404).json({
      "Error": "404 Resource not found."
    })
  } 
  
  return res.status(200).json({
    "status": "Deleted"
  }); 
});


module.exports = router; 
