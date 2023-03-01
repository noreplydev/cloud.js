const path = require('path'); 
const { Router } = require('express'); 

const router = Router(); 

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html')); 
})

module.exports = router; 
