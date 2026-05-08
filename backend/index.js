const express = require('express');
const sequelize = require('./src/config/database.js');

const categoriaRoutes = require('./SRC/routes/categoriaRoutes.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/categorias', categoriaRoutes);



// Test de conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log('Error de conexión:', err));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});