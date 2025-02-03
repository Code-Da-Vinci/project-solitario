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

const MAIN = document.querySelector(".main");

YEAR_2022.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra22/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos22/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos22/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos22/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});