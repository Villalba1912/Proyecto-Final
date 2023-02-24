const boton = document.getElementById('boton');
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



