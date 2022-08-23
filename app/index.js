const express = require('express');
const morgan = require('morgan');

const path = require('path');

const sequelize = require('./utils/database');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

app.use(express.static(path.join(__dirname, './views')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.use('/', router);

(async () => {
try {
    await sequelize.sync(
        {force: true}
    );
    app.listen(process.env.PORT || 3001, () => {
        console.log('Server listo en el puerto ', process.env.PORT || 3001);
    });
} catch (error) {
    console.log(error);
}
})();