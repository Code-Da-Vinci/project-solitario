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

const MAIN = document.querySelector(".main");

YEAR_2023.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra23/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos23/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos23/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos23/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});
