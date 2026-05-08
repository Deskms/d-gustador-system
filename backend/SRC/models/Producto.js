const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto',{
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
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    puntos_para_canje: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'categorias',  
        key: 'id'
    }
}
})

module.exports = Producto;