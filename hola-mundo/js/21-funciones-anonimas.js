"use strict"

//FUNCIONES ANONIMAS
//Es una función que no tiene nombre

var pelicula = function(nombre){
    return "la peliculas es " + nombre;
}



function sumame(n1,n2, sumaYMuestra, sumaPorDos){
    var sumar = n1+n2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//Funcion de CAllback
sumame(5,7,function(dato){
    console.log("La suma es " + dato)
},
function(dato){
    console.log("La suma por dos es",(dato*2));
}
)

//Función de flecha
sumame(5,7,(dato)=>{
    console.log("La suma es " + dato)
},
dato=>{
    console.log("La suma por dos es",(dato*2));
}
)



