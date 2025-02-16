export function listYear(array, main, route) {
   array.forEach(element => {
      main.insertAdjacentHTML('beforeend', `
         <article class="main__card">
            <a class="main__card__link" href="letra${route}/${element.codeName}.html">
               <picture class="main__card__image">
                  <source srcset="fotos${route}/S_${element.codeName}.webp" type="image/webp">
                  <source srcset="fotos${route}/S_${element.codeName}.jpg" type="image/jpeg">
                  <img class="main__card__img" src="fotos${route}/S_${element.codeName}.jpg" alt="${element.name}" loading="lazy">
               </picture>
   
               <h2 class="main__card__title">${element.name} [LETRA]</h2>
            </a>
         </article>
      `);
   });  
};