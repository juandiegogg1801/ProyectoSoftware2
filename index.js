const express = require('express')

const path = require('path')

const app = express()

app.set('PORT',process.env.PORT || 3200)

app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/login.html'))
})

// Ruta para servir el segundo archivo HTML
app.get('/registrarse.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registrarse.html'));
  });  

app.listen(app.get('PORT'),()=>console.log(`Server front in port ${app.get('PORT')}`))
