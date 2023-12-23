const LOGO_MENU = document.querySelector('#click_abrir');
const LISTA_MENU = document.querySelector('#link_abrir');
const CERRAR = document.querySelector('.img_abrir');

LOGO_MENU.addEventListener('click',()=>{
   LISTA_MENU.classList.toggle('activo');
   CERRAR.classList.toggle('bi-x');
})
