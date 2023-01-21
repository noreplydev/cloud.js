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


async function getDir(requestPath) {
  const content = {
    files: [], 
    directories: []
  }

  const entrys = await fs.promises.readdir(requestPath)
  
  entrys.forEach(entry => {
    const targetPath = path.join(requestPath, entry);
    const target = fs.lstatSync(targetPath);

    if (target.isDirectory()) {
      content.directories.push(entry); 
    } else {
      content.files.push({
        name: entry, 
        size: target.size / (1024*1024), 
        extension: entry.split('.')[1]
      }); 
    }
  })

  return content; 
}

module.exports = {
  rmPath, 
  getDir
}
