
//CONFIGURATIONS: 
// PORT: Listen port for the server
// DATA_PATH: Here goes the files storage path
    // win -> D:\\files\my-server\...
    // linux -> /server/my-files/...
// DIRECTORY_DELIMITER: https://server.ex/directory+nested+final-file.txt 
    // e.g: *, +, _
    // this delimiter can not be the same character of a file or folder otherwise
    // the server will assume that the sample-file.txt is /sample/file.txt if we use -
    // as a delimiter. 

module.exports = {
  PORT: 3000, 
  DATA_PATH: '/Users/cristian/Downloads',
  DIRECTORY_DELIMITER: '+', 
  OS: process.platform
} 
