import { listYear } from "../script-years.js";

const YEAR_2024 = [
   {
      name: "Solitario - Os lo dije",
      codeName: "OLD"
   },
   {
      name: "Solitario - Cultura y conocimiento",
      codeName: "CYC"
   },
   {
      name: "Solitario - Intromisivo",
      codeName: "INTROMISIVO"
   },
   {
      name: "Solitario - Cuántico",
      codeName: "CUANTICO"
   },
   {
      name: "Solitario - El mundo subjetivo",
      codeName: "EMS"
   },
];

const main = document.querySelector(".main");
const YEAR = 24;

listYear (YEAR_2024, main, YEAR);