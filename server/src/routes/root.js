const { Router } = require('express'); 

const router = Router(); 

router.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form ref='uploadForm' 
          id='uploadForm' 
          action='http://localhost:3000/upload' 
          method='post' 
          encType="multipart/form-data">
            <input type="file" name="file" />
            <input type='submit' value='Upload!' />
        </form>     
      </body>
    </html>
        
  `)
})

module.exports = router; 
