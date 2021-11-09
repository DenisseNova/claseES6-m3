export default class Cliente {
  constructor(nombre, impuestoFinal) {
    this._nombre = nombre;
    this._impuestoFinal = impuestoFinal;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNOmbre) {
    this._nombre = nuevoNOmbre;
  }

  get impuestoFinal() {
    return this._impuestoFinal;
  }

  set impuestoFinal(nuevoImpuesto) {
    this._impuestoFinal = nuevoImpuesto;
  }

  calculaImpuestoFinal() {
    console.log(`${this._nombre} el impuesto final es: ${this._impuestoFinal.calculaImpuesto()}`);
  }

} // impuesto ()