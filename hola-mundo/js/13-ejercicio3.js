'use strict'

/*
Hacer un programa que muestre todos los numeros entre los numeros introducidos por el usuario
*/

var n1 = Number(prompt("Ingrese por favor un  numero", 0));
var n2 = Number(prompt("Ingrese por favor otro  numero", 0));
document.write("Los numeros entre " + n1 + " y " + n2);


    for (var i = n1; i <= n2; i++) {
        console.log(i);
    }

