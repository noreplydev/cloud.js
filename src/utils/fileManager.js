const fs = require('fs'); 
const path = require('path'); 
const {
  getExtension, 
  getDownloadURL, 
  bytesToHuman,
  dateFormatter
} = require('./conversion.js'); 

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
  const extensions = []; 

  const entrys = await fs.promises.readdir(requestPath); 
  let tSize = 0; // total size of the current folder

  entrys.forEach(entry => {
    const targetPath = path.join(requestPath, entry);
    const target = fs.lstatSync(targetPath);
    // current entry creation date and time
  
    const [date, time] = dateFormatter(target.birthtimeMs); 
    
    if (target.isDirectory()) {
      folders.push({
        name: entry, 
        size: '-', 
        extension: '-',
        dir: true, 
        created_on: date, 
        at: time
      });

    } else {
      const filename = entry.split('.'); 
      const extension = getExtension(targetPath); 
      
     // increment the total size with the current filesize
      tSize += target.size;

      files.push({
        name: filename[0] === '' ? '.'+filename[1] : filename[0], 
        size: target.size, //bytes, first save bytes for then get the percentage
        extension: extension,   
        dir: false, 
        created_on: date, 
        at: time, 
        url: getDownloadURL(targetPath)
      }); 
      extensions.push(extension); 
    }
  })
  
  files.forEach(file => {
    const percentage = (file.size * 100) / tSize;
    file.usage_on_folder = percentage.toFixed(2) + '%'; 
    file.size = bytesToHuman(file.size); 
  })

  const extAverage = getExtAverage(extensions); 
  return {
    content: folders.concat(files),
    extensions: extAverage, 
    folder_total_size: bytesToHuman(tSize), 
  }; 
}

function getExtAverage(array) {
  let average = {}; 

  for (let ext of array) {
    average[ext] = (average[ext] || 0) + 1; 
  }

  const sorted = Object.entries(average).sort((a, b) => {
    if(a[1] === b[1]) return 0; 
    if ((a[1] - b[1]) > 0) {
      return -1; 
    } 
    return 1;
  }); 
  
  const total = sorted.reduce((acc, curr) => {
    return (acc ? acc : 0) + curr[1]; 
  }, undefined)

  // use only the first 5
  const mostUsed = sorted.slice(0, 4); 
  for (let current of mostUsed) {
    const number =  (current[1] * 100) / total;  
    current[1] = Math.ceil(number) + '%'
  }
  return mostUsed; 
}


module.exports = {
  rmPath, 
  getDir
}
