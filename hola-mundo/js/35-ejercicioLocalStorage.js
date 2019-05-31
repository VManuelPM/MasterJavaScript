"use strict"

//Formulario que nos permita añadir peliculas

var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", () => {
    var pelicula = document.querySelector("#addPelicula").value;
    localStorage.setItem(pelicula, pelicula);
});

var index;
var ul = document.querySelector("#peliculasList");
for (index in localStorage) {
    if (typeof (localStorage[index]) == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
}

var formularioBorrado = document.querySelector("#formularioBorrarPeliculas");
formularioBorrado.addEventListener("submit", () => {
    var pelicula = document.querySelector("#borrarPelicula").value;

    if(pelicula.length > 1 ){
        localStorage.removeItem(pelicula);
    }
});