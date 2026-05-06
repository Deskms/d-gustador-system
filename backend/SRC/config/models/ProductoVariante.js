const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');


const ProductoVariante = sequelize.define('ProductoVariante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    tamano: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    precio: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false,
    },
    puntos_que_da: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = ProductoVariante;