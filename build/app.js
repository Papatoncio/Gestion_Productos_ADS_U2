"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _image = _interopRequireDefault(require("./routes/image.routes"));
var _producto = _interopRequireDefault(require("./routes/producto.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Importación de modulos npm (express, morgan, cors)

//Importación de rutas para cada colección de la base de datos

var app = (0, _express["default"])(); //Definición de constante para configurar la aplicación

//Definición de puerto en el que va a correr el servidor
app.set('port', process.env.PORT || 4000);

//Uso de modulos npm (express, morgan, cors)
app.use(_express["default"].json()); //Definir uso de json en express
app.use((0, _morgan["default"])('dev')); //Definir dev con morgan
app.use((0, _cors["default"])()); //Definir uso de cors

//Rutas
//Ruta raíz del servidor
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my application'
  });
});
app.use('/api/image', _image["default"]); //Ruta para acceder a image
app.use('/api/producto', _producto["default"]); //Ruta para acceder a producto

//Exportación de la configuración
var _default = exports["default"] = app;