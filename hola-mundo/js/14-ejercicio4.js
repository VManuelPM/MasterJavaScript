"use strict"

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

 var n1 = Number(prompt("Introducir el n1" , 0));
 var n2 = Number(prompt("Introducir el n2" , 0));

for(var i=0;i<=n2;i++){
if((i%2)!=0){
    document.write(i);
}
 }