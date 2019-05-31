"use strict"

/* 
BOM = Browser Object Model
*/

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location);


//Redirige a otra pagina
function redirect(url){
    window.location.href = url;
}


//Abrir una pestaña nueva
function abrirPestana(url){
    window.open(url,"","width=100,height=300")
}
