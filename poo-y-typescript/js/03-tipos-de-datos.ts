//Tipos de datos personalizandos 
type alfanumerico = string | number;
let variablePersonalizada: alfanumerico = "manuel.com"
variablePersonalizada = 45;

//String
let cadena: string  = "victor manuel";

console.log(cadena);

//Number
let numero: number = 12;

//Boolean
let verdadero_falso: boolean = true;

//Any
let cualquiera:any = "hola";

//Arrays
let lenguajes: Array<string> = ["PHP","JAVA","JAVASCRIPT"];
let arreglo_cualquiera: Array<any> = ["PHP","JAVA","JAVASCRIPT", 1,4];
let years: number[] = [12,13,14,15,16];

//Tipos de datos multiples
let cadenas: string | number = "manuel.com";
cadenas = 12;
console.log(cadenas);

//Let vs Var 
var n1 = 10;
var n2 = 12;

if(n1 == 10){
    let n1 = 44;
    var n2 = 55;

    console.log(n1,n2);
}

console.log(n1,n2);