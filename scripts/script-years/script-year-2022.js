import { listYear } from "../script-years.js";

const YEAR_2022 = [
  {
   name: "Solitario - El responsable",
   codeName: "ER"
  },
  {
   name: "Solitario - La buena poesía",
   codeName: "LBP"
  },
  {
   name: "Solitario - Diestro y siniestro",
   codeName: "DYS"
  },
  {
   name: "Solitario - Asunción, aniquilación y colaboración",
   codeName: "AAYC"
  },
  {
   name: "Solitario - No es buen negocio",
   codeName: "NEBN"
  },
  {
   name: "Solitario - El disidente descontrolado",
   codeName: "EDD"
  },
  {
   name: "Solitario - Barra libre de barras",
   codeName: "BLDB"
  },
  {
   name: "Solitario - Quienes no han entendido las reglas aseguran que la vida no es un juego",
   codeName: "QNHELRAQLVNEUJ"
  },
  {
   name: "Solitario - Soy rico",
   codeName: "SR"
  },
  {
   name: "Solitario - Entrevista",
   codeName: "ENTREVISTA"
  },
  {
   name: "Solitario - Crítica a la ignorancia",
   codeName: "CALI"
  },
  {
   name: "Solitario - Mi determinación",
   codeName: "MD"
  },
  {
   name: "Solitario - Tu peor enemigo o tu mejor maestro",
   codeName: "TPEOTMM"
  },
  {
   name: "Solitario - Nueva era",
   codeName: "NE"
  },
  {
   name: "Solitario - Juicio de masas",
   codeName: "JDM"
  },
  {
   name: "Solitario - La pseudociencia",
   codeName: "LP"
  }
];

const main = document.querySelector(".main");
const YEAR = 22;

listYear (YEAR_2022, main, YEAR);