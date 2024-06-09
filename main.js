const icono = document.querySelector('.navegar__icon');
const navegar = document.querySelector('.navegar');
const navegarUl = document.querySelector('.navegar__ul');

icono.addEventListener('click',()=>{
   icono.classList.toggle('bi-x');
   navegar.classList.toggle('activo');
   navegarUl.classList.toggle('activo');
})
