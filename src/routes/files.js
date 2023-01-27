
const {Router} = require('express'); 
const path = require('path'); 
const fs = require('fs'); 


const {getQueryPath} = require('../utils/conversion.js'); 
const {rmPath, getDir} = require('../utils/fileManager.js'); 
const {DATA_PATH} = require('../config.js'); 

const router = Router(); 

router.get('/:filepath?', async (req, res) => {
  const query = req.params.filepath || ''; // another path || root path 
  const requestPath = getQueryPath(query); 

  let dirData; 

  try {
    console.log(requestPath);
     
    if (fs.lstatSync(requestPath).isDirectory()) {
      dirData = await getDir(requestPath)
    } else {
      return res.status(200).download(requestPath); 
    }
  } catch(err) {
    console.log(err); 
    return res.status(404).json({
      "Error": "404 Resource not found."
    }); 
  } 
  
  return res.json({
    "root_directory": path.basename(DATA_PATH),
    "content": dirData.content,
    "folder_usage": dirData.extensions 
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
