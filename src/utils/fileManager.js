const fs = require('fs'); 
const path = require('path'); 
const {getExtension} = require('./conversion.js'); 

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
  const folders = [{
    name: '..', 
    size: '-', 
    extension: '-', 
    birthday: '-', 
    dir: true
  }]; 
  const files = []; 

  const entrys = await fs.promises.readdir(requestPath)
  
  entrys.forEach(entry => {
    const targetPath = path.join(requestPath, entry);
    const target = fs.lstatSync(targetPath);

    if (target.isDirectory()) {
      folders.push({
        name: entry, 
        size: '-', 
        extension: '-',
        dir: true, 
        birthday: target.birthtimeMs
      }); 
    } else {
      const filename = entry.split('.'); 
      files.push({
        name: filename[0] === '' ? '.'+filename[1] : filename[0], 
        size: target.size, //bytes
        extension: getExtension(targetPath),   
        dir: false, 
        birthday: target.birthtimeMs
      }); 
    }
  })

  return folders.concat(files); 
}

module.exports = {
  rmPath, 
  getDir
}
