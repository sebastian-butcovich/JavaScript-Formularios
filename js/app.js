import {valida} from "./validaciones.js";

const input = document.querySelectorAll("input");

input.forEach((input)=>{
    input.addEventListener("blur",(input)=>{
        valida(input.target);
    });
});