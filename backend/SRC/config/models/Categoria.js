const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false
    },
    nombre: {
        type: DataTypes.STRING(150),
        allowNull : false
    }
});

module.exports = Categoria;