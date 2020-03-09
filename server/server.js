// levantar express y chequear que ande
// crear las rutas y las conexiones

var express = require('express');
var app = express();
const routes = require( '../routes/routes' )
require('dotenv').config()


routes(app)
app.listen(3000, function () {
  console.log('Escuchando en el puerto 3000!');
});
