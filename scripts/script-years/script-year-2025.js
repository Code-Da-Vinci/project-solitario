import { listYear } from "../script-years.js";

const YEAR_2025 = [
   {
      name: "Solitario - El verso incombustible",
      codeName: "EVI"
   },
   {
      name: "Solitario - Pacto",
      codeName: "PACTO"
   },
   {
      name: "Solitario - Os lo dije",
      codeName: "OLD"
   },
];

const main = document.querySelector(".main");
const YEAR = 25;

listYear (YEAR_2025, main, YEAR);