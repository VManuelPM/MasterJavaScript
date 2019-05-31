"use strict"

//Transformación de textos
var numero = 4444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
console.log(dato);

//mayusculas
dato = texto1.toUpperCase();
console.log(dato);

//minusculas
dato = texto1.toLowerCase();
console.log(dato);

//calcular la longitud
dato = texto1.length;

//Longitud de un array
var array = ["hola","si"];
dato = array.length;
console.log(dato);

//concatenar
dato = texto1.concat(" "+texto2);
console.log(dato);

//Buscar 
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);

var busqueda = texto1.match("curso");
console.log(busqueda);

//selecciona una letra concreta
var busqueda = texto1.charAt("14");
console.log(busqueda);

//retorna true o false si encuentra algo con la palabra
var busqueda = texto1.includes("curso");
console.log(busqueda);

