"use strict"

//El window event listener carga los elementos sin importar si el script esta arriba o abajo
window.addEventListener("load", () => {
    // Eventos del ratón
    var boton = document.querySelector("#boton");

    function cambiaColor() {
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
        } else {
            boton.style.background = "green";
        }

        return true;
    }

    //Evento Click
    boton.addEventListener('click', () => {
        cambiaColor();
    });

    //Mouse over = pasar por encima con el ratón y hacer algo
    boton.addEventListener("mouseover", () => {
        boton.style.background = "yellow";
    });

    //Mouseout = hace el evento cuando sale del ovento
    boton.addEventListener("mouseout", () => {
        boton.style.background = "#ccc";
    });


    //-----------------------------------------------------------

    //EVENTOS DE TECLADO

    var input = document.querySelector("#campo_nombre");

    //Focus
    input.addEventListener('focus', () => {
        console.log("[focus] estas dentro del input");

    });

    //Blur
    input.addEventListener('blur', () => {
        console.log("[blur] estas fuera del input");

    });


    //Keydown
    input.addEventListener('keydown', (event) => {
        console.log("[keydown] estas pulsando la tecla ", String.fromCharCode(event.keyCode));

    });

    //Keypress
    input.addEventListener('keypress', (event) => {
        console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));

    });

    //Keyup
    input.addEventListener('keyup', (event) => {
        console.log("[keyup] tecla soltada ", String.fromCharCode(event.keyCode));

    });
});

