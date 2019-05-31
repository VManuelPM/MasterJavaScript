"use strict"

//FETCH y peticiones a servicios/apist rest 
var divUsuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#janet");


getUsuarios().then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getUsuario();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getUsuario() {
    return fetch('https://reqres.in/api/users/2')
}

function getInfo() {

    var profesor = {
        nombre: "Manuel",
        apellidos: "Moreno",
        url: "victor.com"
    };
    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != 'string') return reject("error");

        return resolve(profesor_string);
    });


}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + "." + user.first_name + " " + user.last_name;
        divUsuarios.appendChild(nombre);

    });
}

function mostrarJanet(user) {
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";
    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);
}

