'use strict'
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
//Middleware
app.use(morgan('dev')); //respuesta de peticones lado cliente
app.use(express.json()); //para leer datos json
app.use(cors({ origin: 'http://localhost:4200' }));

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use('/api/accounting' ,require('./routes/role.routes'));
app.use('/api/accounting/users', require('./routes/user.routes'));
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


