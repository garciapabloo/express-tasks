var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const routes = require( '../routes/routes' )
const puerto = 5000;
require('dotenv').config()
const morgan = require('morgan');
app.use( morgan( "dev") );
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

routes(app)
app.listen(puerto, function () {
  console.log(`Escuchando en el puerto ${puerto}!`);
});
