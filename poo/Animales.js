class Animales {
    #especie = "";
    #nombre = "";
    #edad = 0;
    #terrenosAbuela = "terreno";

    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    correr() {
        return `${this.nombre} puede correr`;
    }

    getEspecie() {
        return this.#especie;
    }

    setespecie(especie) {
        this.#especie = especie;
    }
};

class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes){
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    };

    bigotes() {
        return `tengo bigotes color ${this.colorBigotes}`;
    }

    years(){
        return `Tengo ${this.edad} años`;
    }

    especiegato() {
        return `Soy un ${this.getEspecie()}`;
    }
};

let animal = new Animales("Gato", 5);
animal.setespecie("Felis Catus");

let gato = new Gatos("Gatos", 5, "Blanco");
gato.setespecie("Felis Catus");

console.log(gato.years());
//console.log(animal.especie);
console.log(gato);