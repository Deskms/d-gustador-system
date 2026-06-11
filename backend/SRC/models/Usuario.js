const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    rol: {
    type: DataTypes.ENUM('admin', 'empleado'),
    allowNull: false,
    defaultValue: 'empleado'
},
    activo: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
}
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;