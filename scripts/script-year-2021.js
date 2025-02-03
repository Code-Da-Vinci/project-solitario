const YEAR_2021 = [
   {
     name: "Solitario - Un hombre dialogando con su ego",
     codeName: "UHDCSE"
   },
   {
    name: "Solitario - A contracultura [Letra] (7. En defensa del arte)",
    codeName: "AC"
   },
   {
      name: "Solitario - Marketing y cobardía [Letra] (6. En defensa del arte)",
      codeName: "MYC"
   },
   {
      name: "Solitario - Apologetas de la mediocridad [Letra] (5. En defensa del arte)",
      codeName: "ADLM"
   },
   {
      name: "Solitario - Háblales de mí [Letra] (4. En defensa del arte)",
      codeName: "HDM"
   },
   {
     name: "Solitario - Paréntesis recreativo de abuso injustificado [Letra] (3. En defensa del arte)",
     codeName: "PRDAI"
   },
   {
     name: "Solitario - Virtudes, derechos y deberes del artista [Letra] (2. En defensa del arte)",
     codeName: "VDYDDA"
   },

   {
      name: "Solitario - Distinción entre arte y virtuosismo [Letra] (1. En defensa del arte)",
      codeName: "DEAYV"
   },
   {
      name: "Solitario - Introducción a 'En defensa del arte' [Letra] (0. En defensa del arte)",
      codeName: "IAEDDA"
   },
   {
     name: "Solitario - Bip bip",
     codeName: "BB"
   },
   {
     name: "Solitario - Un regalo al mundo que nunca será suyo",
     codeName: "URAMQNSS"
   },
   {
     name: "Solitario - Todo parece infinito un minuto antes de que se acabe",
     codeName: "TPIUMADQSA"
   },
   {
     name: "Solitario - Eterno (s. I. d. S. III)",
     codeName: "ETERNO"
   },
   {
     name: "Solitario - Tápame con las sábanas se la oscuridad, bésame la frente, y haz de esta cama la morta...",
     codeName: "TCLSDLO"
   },
   {
     name: "Solitario - Voy a vivir siempre triste",
     codeName: "VAVST"
   },
   {
     name: "Solitario - Elige el bando",
     codeName: "EEB"
   },
   {
     name: "Solitario - Garabato",
     codeName: "GARABATO"
   },
   {
     name: "Solitario - Cómo va a acabar esto",
     codeName: "CVAAE"
   },
   {
     name: "Solitario - Callar o decir",
     codeName: "COD"
   },
   {
     name: "Solitario - Aunque me arrepienta una y otra vez",
     codeName: "AMAUYOV"
   },
   {
     name: "Solitario - 6h de espejismo",
     codeName: "6HDE"
   },
   {
     name: "Solitario - Bastión de lágrimas",
     codeName: "BDL"
   },
   {
     name: "Solitario - Robo",
     codeName: "ROBO"
   },
   {
     name: "Solitario - Frágiles excusas",
     codeName: "FE"
   },
   {
     name: "Solitario - Qué más da",
     codeName: "QMD"
   }
];

const MAIN = document.querySelector(".main");

YEAR_2021.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra21/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos21/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos21/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos21/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});