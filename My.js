// Evento en cambio de color
var elColor = document.getElementById("esteColor");
// Evento en click del boton
var elBoton = document.getElementById("boton");

elBoton.addEventListener("click", funcionEscriba);

function funcionEscriba() {
  var color = elColor.value;

  alert("Pase!! " + color);
}

