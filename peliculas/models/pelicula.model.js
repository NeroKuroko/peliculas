const { db } = require("../../db/db");



// Insertar una nueva película
const insertarPelicula = (nuevaPelicula) => {
    try {
        db.push(nuevaPelicula);
        return nuevaPelicula; 
    } catch (err) {
        console.error("Error al insertar un nuevo registro");
    }
}


//Ver todos los registros 
const verTodo = () => {
    try{
        return db;
    } catch(err){
        console.error("Error al obtener los datos")
    }
}

//Seleccionar por genero
const verGenero = (genero) => {
    try{
        return db.filter(item => item.genero == genero) [0]
    } catch(err){
        console.error('Error al obtener los datos')
    }
}



// Editar una pelicula
const editarPelicula = (id, datosActualizados) => {
    try {
        const index = db.findIndex(item => item.id === id);
        if (index !== -1) {
            db[index] = { ...db[index], ...datosActualizados };
            return db[index]; 
        }
        return null; 
    } catch (err) {
        console.error("Error al editar el registro por ID");
        return null;
    }
}


//Eliminar registro
const eliminarPelicula = (id) => {
    try {
        const index = db.findIndex(item => item.id === id);
        if (index !== -1) {
            db.splice(index, 1);
            return true;
        }
        return false; 
    } catch (err) {
        console.error("Error al eliminar la película");
        return false; 
    }
}

module.exports = {insertarPelicula, verTodo, verGenero, editarPelicula, eliminarPelicula}

