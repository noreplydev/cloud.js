
const {Router} = require('express'); 
const path = require('path'); 
const fs = require('fs'); 
const {DATA_PATH} = require('../config.js'); 

const router = Router(); 

router.get('/:filepath?', async (req, res) => {
  const content = {
    files: [], 
    directories: []
  }


  const nested = req.params.filepath || ''; // another path || root path
  console.log(req.params.filepath)
  const requestPath = path.join(DATA_PATH, nested);
  console.log(req.method, '  ', requestPath, 'params', req.params.filepath); 
  const entrys = await fs.promises.readdir(requestPath); 

  entrys.forEach(entry => {
    const targetPath = path.join(requestPath, entry);
    const isDirectory = fs.lstatSync(targetPath).isDirectory();

    if (isDirectory) {
      content.directories.push(entry); 
    } else {
      content.files.push(entry); 
    }
  })

  res.json({
    "root_directory": path.basename(DATA_PATH),
    "content": content, 
    "count": content.files.length + content.directories.length 
  }); 
}); 


module.exports = router; 
