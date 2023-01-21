const fs = require('fs'); 
const path = require('path'); 


// if it is a directory it will remove recursively
// otherwise will remove the file
function rmPath(path, isDirectory, res) {
  if (isDirectory) {
    fs.rmSync(path, {recursive: true, force: true});
  } else {
    fs.unlinkSync(path, err => error(err)); 
  } 

  function error(err) {
    if (err) {
      return res.status(500).json({
        "Error": "500 Internal server error"
      }); 
    }
  }
}

module.exports = {
  rmPath
}
