const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // 1. Obtener el token del header
    const token = req.headers['authorization'];
    
    // 2. Si no hay token → error 401
    if (!token) return res.status(401).json({message: 'Token inexistente'});
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // guarda los datos del token
    next();                // continúa al controller
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = { verificarToken };