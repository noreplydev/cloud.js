
const {ENABLE_UPLOAD} = require('../config.js');   
// check if the upload option is enabled
// on the config file
function enabledUpload(req, res, next) {
  console.log(ENABLE_UPLOAD)
  // if on config: upload = false
  if (!ENABLE_UPLOAD) {
    res.status(403).json({"Error": "403 Forbidenn"}); 
  }

  next(); 
}

module.exports = enabledUpload;
