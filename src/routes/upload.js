const {Router} = require('express'); 

const router = Router();
const path = require('path'); 

const {DATA_PATH} = require('../config.js'); 
const enabledUpload = require('../middlewares/enabledUpload.js'); 

// middleware for upload config
router.use(enabledUpload); 

router.post('/', (req, res) => {
  let file; 

  if (!req.files || Object.keys(req.files) === 0) {
    return res.status(400).json({
      "Error": "No file provided"
    }); 
  }

  file = req.files.file; 
  const FILES_PATH= path.join(DATA_PATH, file.name);

  console.log(FILES_PATH);   
  file.mv(FILES_PATH, (err) => {
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

module.exports = router; 







