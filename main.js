import Megjelenit from "./Megjelenit.js";
import {TODOLIST2} from "./adatok.js";
$(function (){
  const  szuloElem= $(".tarolo")
  new Megjelenit(TODOLIST2 ,szuloElem)
  $(window).om("torles",(event)=>{
    console.log(event.detail)
  })
})

