var fecha = new Date();

console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();

var textoHora = `
    El año es:  ${year}
    El mes es:  ${mes+1}
    El dia es:  ${dia}
    La hora es: ${hora}
`;

console.log(textoHora);
console.log(Math.random()*1000);

