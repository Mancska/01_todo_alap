import MegjelenitSor from "./MegjelenitSor.js";
class Megjelenit {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
   szuloElem.append(`<table class" table-bordered table striped ">`);
   this.tablaElem =szuloElem.children("table")
    console.log(this.tablaElem);
    this.tablazatbaIr()
  }
  tablazatbaIr(){

    let txt = "";
    this.#lista.forEach((elem) => {
        new MegjelenitSor(elem,this.tablaElem)})
    
  }
}
export default Megjelenit;
