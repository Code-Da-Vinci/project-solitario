const YEAR_2024 = [
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

const MAIN = document.querySelector(".main");

YEAR_2024.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra24/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos24/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos24/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos24/S_${element.codeName
               }.webp" alt="Solitario - No puedo">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});