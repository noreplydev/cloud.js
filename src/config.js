const fs = require('fs'); 
const path = require('path'); 

function getConfig() {
  const targetPath = path.resolve(__dirname, '../cloudjs.config'); 
  const data = fs.readFileSync(targetPath, {encoding: 'utf8', flag: 'r'}); 
  
  const lines = data.split('\n');
  let config = {}; 

  for(let line of lines) {
    const [directive] = line.split('#');

    // empty spaces
    if(!directive.trim().length) {
      continue; 
    } 

    let [key, value] = directive.split(':'); 
    value = value.replace(/\s/g, '');  
    config[key] = value; 
  }

  return config; 
}

const config = getConfig();  

module.exports = {
  DATA_PATH: config.DATA_PATH,
  PORT: config.PORT, 
  DIRECTORY_DELIMITER: config.DIRECTORY_DELIMITER
}


/*
 *
 * */
