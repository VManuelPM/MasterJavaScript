'use strict'

/*
Utiliznado un bucle mostrar la suma
 y la media de los numeros introducidos hasta introducir un numero negativo
 y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0; 


do{
    var n1 = parseInt(prompt("Ingrese por favor un  numero",0));
    if(isNaN(n1)){
        n1 = 0;
    }else if(n1>=0){
        suma = suma + numero; 
        contador ++;   
    }
}while(n1 >=0);

alert("La suma de todos los numeros es" + suma);
alert("La media de todos los numeros es " + (suma/contador));