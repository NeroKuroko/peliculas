const express = require('express');
const {
    nuevaPelicula,
    listarPeliculas,
    listarPelicula,
    editarPeliculaId,
    eliminarPeliculaId
} = require('../controllers/pelicula.controllers');
const router = express.Router();

// Rutas
router.get('/', listarPeliculas); // Listar todas las películas
router.get('/:genero', listarPelicula); // Listar películas por género

// Nueva película: Para agregar una nueva película
router.post('/nueva', nuevaPelicula);

// Editar película por ID
router.put('/editar/:id', editarPeliculaId);

// Eliminar película por ID
router.delete('/eliminar/:id', eliminarPeliculaId);

module.exports = router;

