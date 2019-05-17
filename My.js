// Evento de color
var elColor = document.getElementById("esteColor");
// Evento de click en boton
var elBoton = document.getElementById("boton");
// Se adiciono el EventListener
elBoton.addEventListener("click", funcionEscriba);

function funcionEscriba() {
  var color = elColor.value;

  alert("Pase!! " + color);