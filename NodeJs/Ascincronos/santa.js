//Con setTimeout.
function leerCarta(carta, callback) {
    return setTimeout(() => {
        callback(carta.split("").reverse().join(""));0
    },2000);
}

function construirJuguete(instruction, callback) {
    return setTimeout(() => {
        const juguete = instruction.split("").reverse().join("");
        if (juguete.includes("madera")) {
            return callback(`${juguete} de madera fina`);
        } else if (juguete.includes("madera")) {
            return callback(`Note puedo mandar tu ${juguete}`);
        } else {
            return callback(`Aqui tienes tú cosa esta ${juguete}`);
        }
    },5000);
}

function envolverJuguete(juguete, callback) {
    return setTimeout(() => {
        callback(`${juguete} envuelto`);
    },3000);
}

//Callback Hell
/*leerCarta("carrito de madera", (instruction) => {
    construirJuguete(instruction, (juguete) => {
        envolverJuguete(juguete, console.log)
    });
});*/

//Modularizar las llamadas.
//Hacer funciones aparte para las llamadas.
function construirC(juguete) {
    envolverJuguete(juguete,console.log);
};

function leerC(instruction) {
    construirJuguete(instruction,construirC);
};

leerCarta ("Carrito de madera" , leerC);