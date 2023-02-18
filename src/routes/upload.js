const {Router} = require('express'); 

const router = Router();
const path = require('path'); 

const {DATA_PATH, DIRECTORY_DELIMITER} = require('../config.js'); 
const enabledUpload = require('../middlewares/enabledUpload.js'); 

// middleware for upload config
router.use(enabledUpload); 

router.post('/:path', (req, res) => {
  let file; 

  if (!req.files || Object.keys(req.files) === 0) {
    return res.status(400).json({
      "Error": "No file provided"
    }); 
  }

  file = req.files.file; 
  
  const FILE_PATH = getPath(req.params.path, file.name);

  console.log(FILE_PATH);   
  file.mv(FILE_PATH, (err) => {
    if (err) {
      console.log('err', err)
      return res.status(500).json({
        "Error": "Internal server error"
      }); 
    }

    return res.status(202).json({
      "status": "OK"
    }); 
  }); 
})

function getPath(string, filename) {
  const separator = process.platform === 'win32' ? '\\' : '/'; 

  const segments = string.split(DIRECTORY_DELIMITER); 
  const relative = segments.join(separator); 
  return path.join(DATA_PATH, relative, filename); 
}

module.exports = router; 







