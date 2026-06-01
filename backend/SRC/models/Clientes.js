const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');


const Clientes = sequelize.define('Clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    numero_telefono: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    total_puntos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Clientes;