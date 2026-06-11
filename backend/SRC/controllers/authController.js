const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const register = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        // 1. Verificar si el email ya existe
        const existe = await Usuario.findOne({ where: { email } });
        if (existe) return res.status(400).json({ message: 'El email ya está registrado' });

        // 2. Encriptar la contraseña
        const hash = await bcrypt.hash(password, 10);

        // 3. Crear el usuario
        const usuario = await Usuario.create({ nombre, email, password: hash, rol });
        res.status(201).json({ message: 'Usuario creado', id: usuario.id });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try{
        const { nombre, email, password, rol } = req.body;
        //Usuario por email
        const existe = await Usuario.findOne ({ where: { email }});
        if (!existe) return res.status(500).json({ message: 'Email no encontrado'});
        //comparar contrasena
        const coincide = await bcrypt.compare(
            password,
            existe.password);
        //contrasena incorrecta
        if (!coincide) {
            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });
        };

        const token = jwt.sign (
            {
                id: existe.id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "8h"
            }
        ); 
        res.json({ token });;
    } catch (error) {

    console.error(error);

    res.status(500).json({
        success: false,
        code: 'LOGIN_ERROR',
        mensaje: 'No fue posible iniciar sesión'
    });

}
};

module.exports = { register, login };