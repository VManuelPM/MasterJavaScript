"use strict"

/*
Programa que:
    1. pida 6 numeros por pantalla y lo meta en un array
    2. Mostrar el array entero(todos sus elementos en el cuerpo de la pagina y en la consola)
    3. Sacar el vector ordenado y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Mostrar cuantos elementos tiene el array
    6. Busqueda de una valor introducido por el usuario y que nos diga si esta en el array y su posición
*/


var n1 = Number(prompt("Digite el n1"));
var n2 = Number(prompt("Digite el n2"));
var n3 = Number(prompt("Digite el n3"));
var n4 = Number(prompt("Digite el n4"));
var n5 = Number(prompt("Digite el n5"));
var n6 = Number(prompt("Digite el n6"));

var arrayNumeros = [n1, n2, n3, n4, n5, n6];

for (var i = 0; i < arrayNumeros.length; i++) {
    document.write(arrayNumeros[i] + "<br/>");
    console.log(arrayNumeros[i]);
}

console.log(arrayNumeros);

document.write("<hr/>")

arrayNumeros.sort();

for (var i = 0; i < arrayNumeros.length; i++) {
    document.write(arrayNumeros[i] + "<br/>");
    console.log(arrayNumeros[i]);
}

document.write("<hr/>")

arrayNumeros.reverse();

for (var i = 0; i < arrayNumeros.length; i++) {
    document.write(arrayNumeros[i] + "<br/>");
    console.log(arrayNumeros[i]);
}

document.write("<hr/>");

document.write("El array tiene " + arrayNumeros.length + " elementos");

var busqueda = Number(prompt("Digite el valor que quiere buscar"));

var indice = arrayNumeros.indexOf(busqueda);
    if(indice>=0){
        document.write("Lo encontre y su posicion es " + indice);
    }else{
       document.write("No lo encontre");  
    }

