YEAR_2017 = [
   {
      name: "Solitario - Ofensivo",
      codeName: "OFENSIVO"
   },
   {
      name: "Solitario - Doble idiota",
      codeName: "DI"
   },
   {
      name: "Solitario - Dolor, tripas y mierda",
      codeName: "DTYM"
   },
   {
      name: "Solitario - Prófugo",
      codeName: "PROFUGO"
   },
   {
      name: "Solitario - Jódete",
      codeName: "JODETE"
   },
   {
      name: "Solitario - Omnia mors aequad (INÉDITO)",
      codeName: "OMA"
   },
   {
      name: "Solitario - Siglo I d. S.",
      codeName: "S1"
   },
   {
      name: "Solitario - Ponzoña",
      codeName: "PONZONIA"
   },
   {
      name: "Solitario - Costra afilada",
      codeName: "CA"
   },
   {
      name: "Solitario - Algo",
      codeName: "ALGO"
   },
   {
      name: "Solitario - Cadáver",
      codeName: "CADAVER"
   },
   {
      name: "Solitario - Sin remordimiento",
      codeName: "SR"
   },
   {
      name: "Solitario - Apnea",
      codeName: "APNEA"
   },
   {
      name: "Solitario - Atormentado",
      codeName: "ATORMENTADO"
   },
   {
      name: "Solitario - Decapitado",
      codeName: "DECAPITADO"
   },
   {
      name: "Solitario - Cadáveres",
      codeName: "CADAVERES"
   },
   {
      name: "Solitario - Lo que soy",
      codeName: "LQS"
   },
   {
      name: "Solitario - Demencia",
      codeName: "DEMENCIA"
   },
   {
      name: "Solitario - NADA",
      codeName: "NADA"
   },
   {
      name: "Solitario - Amén",
      codeName: "AMEN"
   },
   {
      name: "Solitario - Espejismos",
      codeName: "ESPEJISMOS"
   },
   {
      name: "Solitario - Inmoral",
      codeName: "INMORAL"
   },
   {
      name: "Solitario - Ahora",
      codeName: "AHORA"
   },
   {
      name: "Solitario - ¿Para qué?",
      codeName: "PQ"
   },
   {
      name: "Solitario - Un suspiro",
      codeName: "US"
   },
   {
      name: "Solitario - Hijo de puta",
      codeName: "HDP"
   },
   {
      name: "Solitario - Miedo",
      codeName: "MIEDO"
   },
   {
      name: "Solitario - Maldito",
      codeName: "MALDITO"
   },
   {
      name: "Solitario - /Off",
      codeName: "OFF"
   },
   {
      name: "Solitario - Desastre",
      codeName: "DESASTRE"
   },
   {
      name: "Solitario - Tanto",
      codeName: "TANTO"
   },
   {
      name: "Solitario - Terminado",
      codeName: "TERMINADO"
   }
];

const MAIN = document.querySelector(".main");

YEAR_2017.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra17/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos17/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos17/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos17/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});