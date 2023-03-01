const fs = require('fs'); 
const path = require('path'); 

function getConfig() {
  const targetPath = path.resolve('/etc/cloudjs/server.config'); 
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
    value = value.replace(/\s/g, ''); // remove empty spaces  

    if (value === 'false' || value === 'true') {
      config[key] = (value !== 'false');  
      continue; 
    }
    
    config[key] = value; 
  }

  return config; 
}

const config = getConfig();  
module.exports = {...config}

