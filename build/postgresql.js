"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Pool = require('pg').Pool;
var pool = new Pool({
  host: "roundhouse.proxy.rlwy.net",
  port: 16071,
  database: "railway",
  user: "postgres",
  password: "d1GEe4g-1CB3eFgGA5GACcb*1gGd4D4-"
});
var _default = exports["default"] = pool;