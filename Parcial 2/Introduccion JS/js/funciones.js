//funcion declarada
// es una funcion que se declara con la palabra reservada function
function miFuncion(a, b) {
    console.log('la suma es: ' + (a + b));
}

miFuncion(1, 2);

function miReturn (a, b) {
    return a + b;
}

//funcion expresada
// es una funcion que se asigna a una variable
let resultado = miReturn(3, 4);
console.log(resultado);

let sumar = function (a, b) { return a * b; }
resultado = sumar(1, 2);
console.log(typeof sumar);
console.log(resultado);


// Funciones self-invoking
// Porque son funciones que llaman a si mismas
(function (a, b) {
    console.log('Ejecutando la funcion ' + (a + b));
})(3, 4);

// Funciones anonimas
// No son muy comunes pero pueden ser utiles en algunos casos
setTimeout(function () {
    console.log('Hola desde una funcion anonima');
}, 1000);

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'Mexico',
        zip: 12345,
        lat: 14.3232,
        lng: 34.9233
    },

    saluda() {
        return 'Hola soy' +  this.nombre;
    }
};
console.log(persona.saluda());


//Funcion flecha
// Es una nueva forma de declarar funciones
// consiste en omitir la palabra reservada function
const sumarValores = (a, b) => a + b;
console.log(sumarValores(1, 2));


//funciones dentro de objetos
const operaciones = { sumar: (a, b) => a + b, restar: (a, b) => a - b, multiplicar: (a, b) => a * b, dividir: (a, b) => a / b };
console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));
