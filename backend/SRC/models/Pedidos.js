const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Pedidos = sequelize.define('Pedidos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id'
        }
    },
    total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 0
    },
    total_puntos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comentario: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    estado: {
        type: DataTypes.ENUM('pendiente','en proceso','listo','entregado'),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE, defaultValue: DataTypes.NOW,
        allowNull: false
    }
    }, {
    tableName: 'pedidos',
    timestamps: false
    
})

module.exports = Pedidos;