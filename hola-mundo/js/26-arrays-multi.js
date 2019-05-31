"use strict"

//ARRAYS MULTIDIMENSIONALES

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][2]);

//Añadir elemento a un array
peliculas.push("Batman");
console.log(peliculas);

//Eleminar elemento de la pelicula
peliculas.pop();
console.log(peliculas);

var indice = peliculas.indexOf("Gran torino");

//Splice, el indice desde donde queremos borrar, hasta cuantos pasos
if (indice > 1) {
    peliculas.splice(indice, 1);
}
console.log(peliculas);


//JOIN para un array a un string
var ahoraString = peliculas.join();
console.log(ahoraString);

var cadena = ahoraString.split(", ");
console.log(cadena);


//Ordenar un array
categorias.sort();
console.log(categorias);

//Darle vuelta a un array
categorias.reverse();
console.log(categorias);

