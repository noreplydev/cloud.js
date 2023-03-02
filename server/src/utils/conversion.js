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
  const slash = OS === 'win32' ? '\\' : '/';  
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

module.exports = {
  getQueryPath, 
  getExtension, 
  getDownloadURL
}

