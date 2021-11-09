//el main hace el import
// const Cliente= require("./cliente.js") 
// const Impuesto = require("./impuesto.js") 
import Cliente from "./cliente.js";
import Impuesto from "./impuesto.js";
let impuesto1 = new Impuesto(80, 10);
let cliente1 = new Cliente("Carlos", impuesto1);
console.log(cliente1.calculaImpuestoFinal());