const express = require('express');
const morgan = require('morgan');

const path = require('path');
const sequelize = require('./utils/database');
const router = require('./routes');

require('./utils/asociations');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// lograr ver por consola las las solicitudes que se estan realizando al servidor
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

// Para permitir archivos estaticos
app.use(express.static(path.join(__dirname, './views')));

// En la raiz muestro una documentacion con todos los endpoint
// para realizar solicitudes a la api
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})


app.use('/', router);



(async () => {
try {
    // conexion a la base de datos postgres
    await sequelize.sync(
        {force: true}
    );
    // muestro que esta listo el server en el puerto
    app.listen(process.env.PORT || 3001, () => {
        console.log('Server listo en el puerto ', process.env.PORT || 3001);
    });
} catch (error) {
    console.log(error);
}
})();