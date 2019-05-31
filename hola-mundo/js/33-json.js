"use strict"

//JSON - JAVA SCRIPT OBJECT NOTATION

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'USA'
};

console.log(pelicula);
console.log(pelicula.titulo);

pelicula.titulo = "Superman begins";

console.log(pelicula.titulo);

var peliculas = [
    {titulo: "la verdad duele", year: 2016, pais:"Francia"},
    pelicula
]

console.log(peliculas);

var cajaPeliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[index].titulo + "-" + peliculas[index].year) ;
    cajaPeliculas.append(parrafo);
}

