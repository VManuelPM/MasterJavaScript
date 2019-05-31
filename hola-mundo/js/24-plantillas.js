"use strict"

//Plantillas de texto

var nombre = prompt("inserte su nombre");
var apellido = prompt("inserte su apellido");

var texto = `
    <h1>hola que tal</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Mi apellido es ${apellido}</h3>
`;

document.write(texto);