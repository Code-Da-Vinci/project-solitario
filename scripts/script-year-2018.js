YEAR_2018 = [
   {
      name: "Solitario - En el infierno nieva",
      codeName: "EEIN"
   },
   {
      name: "Solitario - Cineastas",
      codeName: "CINEASTAS"
   },
   {
      name: "Solitario - La virgen con polla",
      codeName: "LVCP"
   },
   {
      name: "Solitario - Boyantes consejeros",
      codeName: "BC"
   },
   {
      name: "Solitario - Ninguna novedad",
      codeName: "NN"
   },
   {
      name: "Solitario - Calvario",
      codeName: "CALVARIO"
   },
   {
      name: "Solitario - Dos muertes",
      codeName: "DM"
   },
   {
      name: "Solitario - El rostro de la muerte es el reloj",
      codeName: "ERDLMEER"
   },
   {
      name: "Solitario - Para qué hacer las maletas, si sabemos que nos vamos",
      codeName: "PQHLMSSQNV"
   },
   {
      name: "Solitario - Todo lo que has esperado han sido segundos perdidos",
      codeName: "TLQHEHSSP"
   },
   {
      name: "Solitario - Irreverente",
      codeName: "IRREVERENTE"
   },
   {
      name: "Solitario - Los clavos de mis manos serán los de tu ataúd",
      codeName: "LCDMMSLDTA"
   },
   {
      name: "Solitario - Demasiado poco lucro para quebrantar la ley",
      codeName: "DPLPQLL"
   },
   {
      name: "Solitario - (PARENTESIS)",
      codeName: "PARENTESIS"
   },
   {
      name: "Solitario - Solo me devuelve la emoción lo que me enerva",
      codeName: "SMDLELQME"
   },
   {
      name: "Solitario - Desalmado",
      codeName: "DESALMADO"
   },
   {
      name: "Solitario - Agresión y tajo",
      codeName: "AYT"
   },
   {
      name: "Solitario - El procedimiento más cuerdo",
      codeName: "EPMC"
   },
   {name: "Solitario - Anatomía de la infelicidad inherente al individuo reacio al autoengaño",
      codeName: "ADLIIAIRAA"
   },
   {
      name: "Solitario - Memoria y circunstancia (Prod. CutThroat)",
      codeName: "MYC"
   },
   {
      name: "Solitario - La excitación del ahorcado",
      codeName: "LEDA"
   },
   {
      name: "Solitario - **** * ** puta mierda",
      codeName: "PM"
   },
   {
      name: "Solitario - Belicoso",
      codeName: "BELICOSO"
   },
   {
      name: "Solitario - Solitario",
      codeName: "SOLITARIO"
   },
   {
      name: "Solitario - Aversión suprema (s.I d. S. II)",
      codeName: "AS2"
   },
   {
      name: "Solitario - \"Pudo\"",
      codeName: "PUDO"
   },
   {
      name: "Solitario - Incorruptible",
      codeName: "INCORRUPTIBLE"
   },
   {
      name: "Solitario - Inadaptado",
      codeName: "INADAPTADO"
   },
   {
      name: "Solitario - Presidiario",
      codeName: "PRESIDIARIO"
   }
];

const MAIN = document.querySelector(".main");

YEAR_2018.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra18/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos18/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos18/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos18/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});