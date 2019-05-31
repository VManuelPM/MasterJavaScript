//INTERFACE
interface camisetaBase {
    setColor(color: any): any;
    getColor(): string;
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//CLASE
@estampar('Gucci Gang')
class Camiseta implements camisetaBase {
    //propiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Métodos (funciones o acciones del objeto)

    constructor(color: any, modelo: any, marca: any, talla: any, precio: any) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: any) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

}


//Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean = false;

    setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}


var camiseta = new Camiseta("f", "f", "f", "f", 45);

console.log(camiseta);
camiseta.estampacion;

var sudadera_nike = new Sudadera("Rojo","Manga Larga","Nike","L",30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Purpura")
console.log(sudadera_nike);