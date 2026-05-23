const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Sabores = sequelize.define('Sabores',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    tipo_sabor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(150),
        allowNull: true
    }}, {
    tableName: 'sabores',
    timestamps: false
});

module.exports = Sabores;