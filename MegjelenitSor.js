class MegjelenitSor {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    console.log(this.pipaElem);
    this.pipaElem.on("click", () => {
      console.log(this);
      this.sorElem.css("background-color", "lightgreen");
    });
    this.megseElem = this.sorElem.children("td").children(".megse");
    console.log(this.megseElem);
    this.megseElem.on("click", () => {
      console.log(this);
      this.sorElem.css("background-color", "white");


      this.torolElem.on("click", () => {
        this.#esemenyTrigger("torles")
        
      });
    });
  }
  #hatterszin(szin, keszElemAllapot, megseElemAllapot) {}

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (key !== "kesz") {
        if (Object.hasOwnProperty.call(this.#adat, key)) {
          const element = this.#adat[key];
          txt += `<td>${element} </td>`;
        }
      }
    }

    txt += `<td><span class="kesz">✅</span>  <span class="megse">❌ </span> <span class="torol"> 🗑️ </span></td>`;

    txt += "</tr>";
    console.log(txt);
    this.tablaElem.append(txt);
  }
  #esemenyTrigger(esemnynev){
    const esemenyem = new CustomEvent(esemnynev,{ detail: this});
    window.dispatchEvent(esemenyem)
  }
}
export default MegjelenitSor;
