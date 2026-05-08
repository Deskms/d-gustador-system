const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const DetallePedidos = sequelize.define('DetallePedidos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_sabor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'sabores',
            key: 'id'
        }
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pedidos',
            key: 'id'
        }
    },
    id_variante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'producto_variante',
            key: 'id'
        }
    },
    comentario: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    total_puntos_ganados: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    }
})

module.exports = DetallePedidos;
