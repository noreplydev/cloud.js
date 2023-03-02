
const {ENABLE_UPLOAD} = process.env;   
// check if the upload option is enabled
// on the config file
function enabledUpload(req, res, next) {
  // if on config: upload = false
  if (!ENABLE_UPLOAD) {
    return res.status(403).json({"Error": "403 Forbidenn"}); 
  }

  next(); 
}

module.exports = enabledUpload;
