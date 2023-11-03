const Sequelize = require('sequelize');
const sequelize = new Sequelize('peliculas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' // Asegúrate de usar el dialecto correcto para tu base de datos
});

const { DataTypes } = Sequelize;

const Peliculas = sequelize.define(
  'Peliculas',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'peliculas', // El nombre de la tabla en la base de datos
    timestamps: false, // Si no deseas usar timestamps
  }
);

module.exports = Peliculas;
