"use strict"

/*
 DOM - Document Object Model
 */

function cambiaColor(color) {
    caja.style.background = color;
}

//---------------------------------------------

//SELECCIONA ELEMENTO DEL DOM CON UN ID CONCRETO 

//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");


//Cambiar texto desde js a un elemento html
caja.innerHTML = "Hola que hace";

//cambiar estilos
caja.style.background = "red";

console.log(caja);

//---------------------------------------------------

//SELECCIONAR ELEMENTOS POR SU ETIQUETA

var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miSeccion");
var contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML = "Hola que mas";
console.log(todosLosDivs[2].textContent);

var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

//-------------------------------------------------

//SELECCIONAR ELEMENTOS POR SU CLASE CSS

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){ 
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
    
}

//------------------------------------------------
//QUERY SELECTOR 
var id = document.querySelector("#encabezado");
console.log(id);