const express = require('express');
const app = express();
const port = 3001;

// Importa y usa las rutas de películas
const peliculasRouters = require('./peliculas/routers/peliculas.routes')
app.use('/peliculas', peliculasRouters)


app.listen(port, () => console.log(`Servidor escuchado en http://localhost:${port}`));

//Imoortar la conexión 
const db = require('./db/db'); 


