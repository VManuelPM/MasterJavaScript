"use strict"

//Parametros REST y SPREAD

function listadoDeFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("fruta 1 ", fruta1);
    console.log("fruta 1 ", fruta2);
    console.log(restoDeFrutas);
}

listadoDeFrutas("Manzana", "Fresa", "Coco", "Pera");

var frutas = ['Naranja','Manzana','Fresa','Coco','Durazno']; 
listadoDeFrutas(...frutas, 'pera','uva');