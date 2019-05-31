'use strict'
/* 
Programa que pida dos numeros y que nos diga cual es mayor, el menor y si son iguales
*/

var n1 = prompt("Ingrese por favor un  numero",0);
var n2 = prompt("Ingrese por favor otro  numero",0);

if(n1==n2){
document.write("Los numeros son iguales");
}

if(n1>n2 ){
    document.write("El n1 es mayor a n2");
}
else if(n2>n1){
    document.write("El n2 es mayor a n1");
}

if(n1<n2){
    document.write("El n1 es menor que n2")
}
else{
    document.write("El n2 es menor que n1")
}

