// Evento de color
var elColor = document.getElementById("esteColor");
// Evento de click en boton
var elBoton = document.getElementById("boton");

elBoton.addEventListener("click", funcionEscriba);

function funcionEscriba() {
  var color = elColor.value;

  alert("Pase!! " + color);