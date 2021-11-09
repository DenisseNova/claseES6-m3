"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//el main hace el import
// const Cliente= require("./cliente.js") 
// const Impuesto = require("./impuesto.js") 
var impuesto1 = new _impuesto["default"](80, 10);
var cliente1 = new _cliente["default"]("Carlos", impuesto1);
console.log(cliente1.calculaImpuestoFinal());