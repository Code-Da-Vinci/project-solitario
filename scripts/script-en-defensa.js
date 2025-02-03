const EN_DEFENSA = [
   {
      title: "Solitario - Introducción a 'En defensa del arte' [Letra] (0. En defensa del arte)",
      code: "IAEDDA"
   },
   {
      title: "Solitario - Distinción entre arte y virtuosismo [Letra] (1. En defensa del arte)",
      code: "DEAYV"
   },
   {
      title: "Solitario - Virtudes, derechos y deberes del artista [Letra] (2. En defensa del arte)",
      code: "VDYDDA"
   },
   {
      title: "Solitario - Paréntesis recreativo de abuso injustificado [Letra] (3. En defensa del arte)",
      code: "PRDAI"
   },
   {
      title: "Solitario - Háblales de mí [Letra] (4. En defensa del arte)",
      code: "HDM"
   },
   {
      title: "Solitario - Apologetas de la mediocridad [Letra] (5. En defensa del arte)",
      code: "ADLM"
   },
   {
      title: "Solitario - Marketing y cobardía [Letra] (6. En defensa del arte)",
      code: "MYC"
   },
   {
      title: "Solitario - A contracultura [Letra] (7. En defensa del arte)",
      code: "AC"
   },
];

const CONTAINER = document.querySelector('.defense__container');

EN_DEFENSA.forEach(element => {
   CONTAINER.insertAdjacentHTML('beforeend', `
      <article class="defense__card">
         <a class="defense__card__link" href="letra21/${element.code}.html">
            <picture class="defense__card__image">
               <source srcset="images/S_${element.code}.webp" type="image/webp">
               <source srcset="images/S_${element.code}.jpg" type="image/jpeg">
               <img class="defense__card__img" src="images/S_${element.code}.jpg" alt="${element.title}" loading="lazy">
            </picture>
   
            <h3 class="defense__card__title defense__card__title-mod">${element.title}</h3>
         </a>
      </article>
   `);
});
