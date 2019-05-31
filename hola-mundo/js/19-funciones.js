"use strict"


function calculadora(numero1, numero2, mostrar = false) {
    return "la suma es " + (numero1 + numero2 + "<br/>");
}

function suma(n1,n2){
    return (n1+n2)
}
function porConsola(numero1, numero2) {
    console.log(suma(numero1,numero2));
}


porConsola(5,4);

for (var i = 0; i < 15; i++) {
    document.write(calculadora(i, 4));
}

