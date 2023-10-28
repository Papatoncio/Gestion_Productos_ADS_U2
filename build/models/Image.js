"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
//Importación Schema y model de mongoose
//Creación de esquema para la colección
var imageSchema = new _mongoose.Schema({
  //Atributos de la colección
  claveProducto: {
    type: String,
    required: true
  },
  imgB64: [{
    type: String,
    required: true
  }]
});
var _default = exports["default"] = (0, _mongoose.model)('Image', imageSchema); //Exportación del modelo basado en el esquema