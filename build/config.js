"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
//Importación config

(0, _dotenv.config)(); //Permitir configuración

//Exportar configuración de mongodbURL y SECRET
var _default = exports["default"] = {
  mongodbURL: process.env.MONGODB_URI,
  //URL Mongo Atlas
  SECRET: 'sammyshop-api' //Palabra secreta para generación de token
};