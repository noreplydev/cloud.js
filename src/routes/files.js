
const {Router} = require('express'); 
const path = require('path'); 
const fs = require('fs/promises'); 
const {DATA_PATH} = require('../config.js'); 

const router = Router(); 

router.get('/', async (req, res) => {
  console.log(DATA_PATH);  
  let files = []; 

  await fs.readdir(DATA_PATH)
    .then(filenames => {
      files = [...filenames]; 
    }); 

  res.json({
    "root_directory": path.basename(DATA_PATH),
    "files": files, 
    "count": files.length
  }); 
}); 


module.exports = router; 
