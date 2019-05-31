"use strict"

//LOCALSTORAGE 

//Información que persista en el navegador


//Comprobar disponibilidad de local storage
if (typeof (Storage) !== "undefined") {
    console.log("Local Storage disponible");
} else {
    console.log("Local Storage no disponible");
}

//Guardar datos
localStorage.setItem("titulo","curso de Java Script");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

//Guardar obejtos
var usuario = {
    nombre: "Victor Manuel",
    email : "v.manuel.nago@gmail.com",
    web: "manuel.com" 
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#peliculas").append(" " + userjs.web);