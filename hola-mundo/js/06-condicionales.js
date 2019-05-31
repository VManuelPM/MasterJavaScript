'use strict'

//condicional IF 
var edad1 = 10;
var edad2 = 12;

if(edad1 > edad2){
console.log("edad1 es mayor que edad2")
}else{
console.log("edad1 es menor");
}

var nombre = "David Suarez";

if(edad1 >= 18){
    //es mayor de edad
    console.log(nombre + " tiene "  + edad1 + " años");
}else{
    console.log(nombre + " es menor de edad porque tiene "  + edad1 + " años");
}
 
// Operadores lógicos
var year = 2019;
if(year != 2017 ){
    console.log("El año no es 2019");
}

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la epoca post-moderna");
}

