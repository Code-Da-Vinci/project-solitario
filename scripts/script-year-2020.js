YEAR_2020 = [
   {
      name: "Solitario - Pero qué forma más buena",
      codeName: "PQFMB"
   },
   {
      name: "Solitario - Doble temporal",
      codeName: "DT"
   },
   {
      name: "Solitario - La historia más bella",
      codeName: "LHMB"
   },
   {
      name: "Solitario - Déjame solo",
      codeName: "DS"
   },
   {
      name: "Solitario - Si supieras",
      codeName: "SS"
   },
   {
      name: "Solitario - Obsidiana",
      codeName: "OBSIDIANA"
   },
   {
      name: "Solitario - Confuso",
      codeName: "CONFUSO"
   },
   {
      name: "Solitario - Constante",
      codeName: "CONSTANTE"
   },
   {
      name: "Solitario - Sálvame del frío",
      codeName: "SDF"
   },
   {
      name: "Solitario - Esta noche soñaré que me abrazas",
      codeName: "ENSQMA"
   },
   {
      name: "Solitario - Cesárea",
      codeName: "CESAREA"
   },
   {
      name: "Solitario - Escritor",
      codeName: "ESCRITOR"
   },
   {
      name: "Solitario - Veneno",
      codeName: "VENENO"
   },
   {
      name: "Solitario - Mintamos",
      codeName: "MINTAMOS"
   },
   {
      name: "Solitario - Decepcionante (Prod. Hellsidebeats)",
      codeName: "DECEPCIONANTE"
   },
   {
      name: "Solitario - Confundiendo el Sol con un cometa",
      codeName: "CESCUC"
   },
   {
      name: "Solitario - Sarcófago",
      codeName: "SARCOFAGO"
   },
   {
      name: "Solitario - ¿Por qué me mientes?",
      codeName: "PQMM"
   },
   {
      name: "Solitario - Más punk que el punk",
      codeName: "MPQEP"
   },
   {
      name: "Solitario - Siniestro total",
      codeName: "ST"
   },
   {
      name: "Solitario - Déjà vu",
      codeName: "DV"
   },
   {
      name: "Solitario - Deudor",
      codeName: "DEUDOR"
   },
   {
      name: "Solitario - Inmortal",
      codeName: "INMORTAL"
   },
   {
      name: "Solitario - Calambre",
      codeName: "CALAMBRE"
   },
   {
      name: "Solitario - Custodia compartida",
      codeName: "CC"
   },
   {
      name: "Solitario - El precio más caro",
      codeName: "EPMC"
   },
   {
      name: "Solitario - La antepenúltima palabra",
      codeName: "LAP"
   },
   {
      name: "Solitario - Nunca más",
      codeName: "NM"
   },
   {
      name: "Solitario - Hoy, voluntad y hambre",
      codeName: "HVYH"
   },
   {
      name: "Solitario - Maleducado",
      codeName: "MALEDUCADO"
   },
   {
      name: "Solitario - Traidor",
      codeName: "TRAIDOR"
   },
   {
      name: "Solitario - El debate del suicida",
      codeName: "EDDS"
   },
   {
      name: "Solitario - Malas noticias",
      codeName: "MN"
   },
   {
      name: "Solitario - En cada carcajada hay una lágrima a cubierto",
      codeName: "ECCHULAC"
   },
   {
      name: "Solitario - El proceso del progreso de las horas",
      codeName: "EPDPDLH"
   },
   {
      name: "Solitario - Mis días son más tristes que el entierro de un niño",
      codeName: "MDSMTQEEDUN"
   },
   {
      name: "Solitario - Con la única tregua que me conceden los sueños",
      codeName: "CLUTQMCLS"
   },
   {
      name: "Solitario - Tus labios me han mentido tanto, que en cada engaño eran distintos",
      codeName: "TLMHMTQECEED"
   },
   {
      name: "Solitario - Exhibición y percepción",
      codeName: "EYP"
   }
];

const MAIN = document.querySelector(".main");

YEAR_2020.forEach(element => {
   MAIN.insertAdjacentHTML('beforeend', `
      <article class="main__card">
         <a class="main__card__link" href="letra20/${element.codeName}.html">
            <picture class="main__card__image">
               <source srcset="fotos20/S_${element.codeName}.webp" type="image/webp">
               <source srcset="fotos20/S_${element.codeName}.jpg" type="image/jpeg">
               <img class="main__card__img" src="fotos20/S_${element.codeName
               }.jpg" alt="${element.name}" loading="lazy">
            </picture>

            <h2 class="main__card__title">${element.name} [LETRA]</h2>
         </a>
      </article>
   `);
});