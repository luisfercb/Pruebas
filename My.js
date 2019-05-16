var elColor = document.getElementById("esteColor");

var elBoton = document.getElementById("boton");

elBoton.addEventListener("click", funcionEscriba);

function funcionEscriba() {
  var color = elColor.value;

  alert("Pase!! " + color);
}

