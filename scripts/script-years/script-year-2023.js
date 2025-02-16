import { listYear } from "../script-years.js";

const YEAR_2023 = [
   {
      name: "Solitario - Contra el arte subjetivo",
      codeName: "CEAS"
   },
   {
      name: "Solitario - La nueva enfermedad mental",
      codeName: "LNEM"
   },
   {
      name: "Solitario - El hombre de conocimiento",
      codeName: "EHDC"
   },
   {
      name: "Solitario - El capital intelectual",
      codeName: "ECI"
   },
   {
      name: "Solitario - Taquigrafía",
      codeName: "TAQUIGRAFIA"
   }
];

const main = document.querySelector(".main");
const YEAR = 23;

listYear (YEAR_2023, main, YEAR);