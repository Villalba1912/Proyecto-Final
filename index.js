const primer = document.getElementById('refer-primer');
const segundo = document.getElementById('refer-segundo');

// Evento para mostrar las referencias de los trabajos
boton.addEventListener('click', referir);

let bandera = 0;

function referir(){
  if (parseInt(bandera) == 0) {
    primer.style.display = "block";
    segundo.style.display = "block";
    bandera = 1;
  } else{
    primer.style.display = "none";
    segundo.style.display = "none";
    bandera = 0;
  }
}


/* Evento para mostrar el menu de navegacion */

document.getElementById('icono-menu').addEventListener('click', mostrar_menu);

function mostrar_menu(){
  console.log("Hola Mundo");
  document.querySelector('.menu_nav').classList.toggle('mostrar_nav');
}

/* Evento para resaltar los datos de contacto */

const resaltar = document.getElementsByClassName('resaltar');
document.getElementById('btn_contacto').addEventListener('click', mostrar_contacto);

function mostrar_contacto() {
  for (let i =0; i < resaltar.length; i++) {
    resaltar[i].style.backgroundColor = "crimson";
    resaltar[i].style.color = "white"
  }
}