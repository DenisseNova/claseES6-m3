"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestoFinal) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuestoFinal = impuestoFinal;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNOmbre) {
      this._nombre = nuevoNOmbre;
    }
  }, {
    key: "impuestoFinal",
    get: function get() {
      return this._impuestoFinal;
    },
    set: function set(nuevoImpuesto) {
      this._impuestoFinal = nuevoImpuesto;
    }
  }, {
    key: "calculaImpuestoFinal",
    value: function calculaImpuestoFinal() {
      console.log("".concat(this._nombre, " el impuesto final es: ").concat(this._impuestoFinal.calculaImpuesto()));
    }
  }]);

  return Cliente;
}(); // impuesto () 


exports["default"] = Cliente;