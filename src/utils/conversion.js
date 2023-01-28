const path = require('path'); 
const {DATA_PATH, DIRECTORY_DELIMITER, OS} = require('../config.js'); 

function getQueryPath(query) {
  const segments = query.split(DIRECTORY_DELIMITER); 
  let requestedPath = DATA_PATH; 

  let count = 0; 
  while (count < segments.length) {
    requestedPath = path.join(requestedPath, segments[count]); 
    count++; 
  }

  return requestedPath;
}

function getDownloadURL(targetPath) {
  const slash = process.platform === 'win32' ? '\\' : '/';  
  const segmentsCount = DATA_PATH.split(slash).length; 
  const urlArray = targetPath.split(slash); 

  return 'files/' + urlArray
    .splice(segmentsCount, urlArray.length-1)
    .join(slash);  
}

function getExtension(targetPath) {
  const extension = path.extname(targetPath); 
  return extension === '' ? '-' : extension; 
}

function bytesToHuman(bytes) {
  const sizes = ['KB', 'MB', 'GB', 'TB']; 

  if (bytes < 1000) return `${bytes} bytes`;

  for(let i = 0; i < sizes.length; i++) {
    bytes = bytes / 1024; 
    if(bytes < 700) return `${bytes.toFixed(1)} ${sizes[i]}`; 
  }

  return `${bytes.toFixed(1)} ${sizes[sizes.length-1]}`; 
}

function dateFormatter(timestamp) {
  if(timestamp === '-') return '-' // to handle the .. back directory

  // converts timestamp to human readable format
  const date = new Date(timestamp);
  
  const day = date.getDate().toString()
  const month = (date.getMonth() + 1).toString()
  const year = date.getFullYear();

  const creationDate = `${day}-${month}-${year}`;
 
  // for times
  const hour = date.getHours().toString()
  const minutes = date.getMinutes().toString()
  
  const time = `${hour}:${minutes.length < 2 ? '0'+minutes : minutes}`; 

  return [creationDate, time]; 
}


module.exports = {
  getQueryPath, 
  getExtension, 
  getDownloadURL, 
  bytesToHuman, 
  dateFormatter
}

