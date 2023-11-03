const {insertarPelicula, verTodo, verGenero, editarPelicula, eliminarPelicula} = require ('../models/pelicula.model')

//Insertar una nueva película. 
const nuevaPelicula = (req, res) => {
    try {
        const nuevaPelicula = req.body; 
        const peliculaInsertada = insertarPelicula(nuevaPelicula);
        res.status(201).json(peliculaInsertada);
    } catch (err) {
        res.status(500).send("Error al insertar una nueva película: " + err);
    }
}


//Ver todas las películas 
const listarPeliculas = (req, res) =>{
    try{
        const resp = verTodo()
        res.status(200).send(resp)
    } catch(err) {
        res.status(500).send(err)
    }
}

//Ver la película por su género
const listarPelicula = (req, res) => {
    try{
        const resp = verGenero(req.params.genero)
        res.status(200).send(resp)
    }catch(err){
        res.status(500).send(err)
    }
}

//Editar película 
const editarPeliculaId = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const datosActualizados = req.body; 
        const peliculaActualizada = editarPelicula(id, datosActualizados);
        
        if (peliculaActualizada) {
            res.status(200).json(peliculaActualizada);
        } else {
            res.status(404).send("La película no se encontró.");
        }
    } catch (err) {
        res.status(500).send("Error al editar la película: " + err);
    }
}


// Eliminar película por su ID
const eliminarPeliculaId = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const eliminacionExitosa = eliminarPelicula(id);

        if (eliminacionExitosa) {
            res.status(204).send();
        } else {
            res.status(404).send("La película no se encontró.");
        }
    } catch (err) {
        res.status(500).send("Error al eliminar la película: " + err);
    }
}

module.exports = {nuevaPelicula, listarPeliculas, listarPelicula, editarPeliculaId, eliminarPeliculaId}

