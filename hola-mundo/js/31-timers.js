"use strict"

window.addEventListener("load", () => {
    //TIMERS 

    //SET INTERVAL
    function intervalo() {
        var tiempo = setInterval(() => {
            console.log("SetInterval ejecutado");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    //SET TIMEOUT
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        alert("Se paro el intervalo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
    start.addEventListener("click", () => {
        alert("Iniciado el evento en bucle");
        intervalo();
    });

});