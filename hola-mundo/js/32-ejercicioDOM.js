"use strict"

window.addEventListener("load",()=>{
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = Number(document.querySelector("#edad").value);
        console.log(nombre,apellidos,edad);

    if(nombre.trim() == null || nombre.trim().lenght == 0 || nombre == ""){
        alert("El nombre no es valido");
        return false;
    }

    if(apellidos.trim() == null || apellidos.trim().lenght == 0  || apellidos == ""){
        alert("Los apellidos no son validos");
        return false;
    }

    if(edad == null || edad <= 0 || isNaN(edad)){
        alert("La edad no es valida");
        return false;
    }


        
        box_dashed.style.display = "block";

        var datosUsuario = [nombre,apellidos,edad];
        var indice;
        for(indice in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            box_dashed.append(parrafo); 
        }
    });
    
});