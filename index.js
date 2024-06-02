const express = require('express');
const path = require('path');
const cors = require('cors'); // Importar el middleware cors

const app = express();

app.set('PORT', process.env.PORT || 3200);

// Habilitar el middleware CORS
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/registrarse.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registrarse.html'));
});

app.get('/iniciar_sesion.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'iniciar_sesion.html'));
});

app.listen(app.get('PORT'), () => console.log(`Server front in port ${app.get('PORT')}`));
