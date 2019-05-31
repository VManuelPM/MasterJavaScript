"use strict"

//Arrays / arreglos / matrices

var nombres = ['manuel','moreno','leonardo'];

var lenguajes = new Array("php","js", "Java");

for(var i =0; i<lenguajes.length;i++){
    console.log(lenguajes[i]);
}

lenguajes.forEach((elemento, index, data)=>{
    console.log(elemento, index)
})

//Recorrer array con for in

for(let indice in lenguajes){
    console.log(lenguajes[indice]);
}

//Busquedas
var busqueda = lenguajes.find((lenguaje)=>{
    return lenguaje == "php";
});

console.log(busqueda);


var busqueda = lenguajes.find(lenguaje=>lenguaje == "Java");
console.log(busqueda);


