"use strict"

var moongose = require('mongoose');
var app = require("./app");
var port = 3700;

moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/portafolio')
.then(()=>{
    console.log("Conexion a la bd establecida con éxito");

    //CREACION DEL SERVER
    app.listen(port, () =>{
        console.log("Servidor corriendo correctamente en la URL: localhost:3700");
    });
})
.catch(err=>{
    console.log(err)
});
