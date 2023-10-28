"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductos = exports.gestionarProductos = void 0;
var _postgresql = _interopRequireDefault(require("../postgresql"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getProductos = exports.getProductos = function getProductos(request, response) {
  var accion = parseInt(request.body.accion);
  var filtro = JSON.stringify(request.body.filtro);
  _postgresql["default"].query('SELECT * FROM filtrar_producto($1, $2)', [filtro, accion], function (error, results) {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
var gestionarProductos = exports.gestionarProductos = function gestionarProductos(request, response) {
  var accion = parseInt(request.body.accion);
  var producto = JSON.stringify(request.body.producto);
  _postgresql["default"].query('SELECT * FROM gestionar_producto($1, $2)', [producto, accion], function (error, results) {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};