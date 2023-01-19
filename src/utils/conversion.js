const path = require('path'); 
const {DATA_PATH, DIRECTORY_DELIMITER} = require('../config.js'); 

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

module.exports = {
  getQueryPath
}

