"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Importación de configuraciones de la aplicación
//Importación de la configuración de la base de datos

_app["default"].listen(_app["default"].get('port')); //Configuración de puerto de escucha
console.log("Server on port", _app["default"].get('port')); //Mensaje para indicar en que puerto se encuentra el servidor