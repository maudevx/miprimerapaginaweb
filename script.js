var boton = document.getElementById("boton");
var nav = document.getElementById("nav");

// boton.addEventListener('click', () => {
//   nav.classList.toggle("nav-visible")
// });

boton.addEventListener('click', () => {
  if(nav.classList.contains('nav-visible')){
    nav.classList.remove('nav-visible');
  }else{
    nav.classList.add('nav-visible');
  }  
});
