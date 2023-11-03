const mysql = require('mysql');
const Sequelize = require('sequelize');

// Importa el modelo de Peliculas
const Peliculas = require('../peliculas/models/peliculasModel');

const dbConfig = { 
    host: 'localhost', 
    database: 'peliculas', 
    user: 'root', 
    password: ''
}; 

const connection = mysql.createConnection(dbConfig);

// Declarar registrosbd como una variable global
let registrosbd = [];

connection.connect((error) => { 
    if (error) { 
        throw error; 
    } else { 
        console.log('Conexión exitosa a la base de datos'); 
        module.exports = {connection}
    } 
});




