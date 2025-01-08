/********************************
            OBJETOS
 ********************************/

// caracteristicas principales de los objetos en JS

//Claves y valores
//Las claves son cadenas o simbolos (unicos)
//Los valores pueden ser de cualquier tipo de dato: numeros, cadenas, booleanos, objetos, funciones, arreglos, etc.

//Dinamismo:
//Los objetos pueden cambiar en tiempo de ejecucion, es decir, se pueden agregar, modificar o eliminar propiedades de un objeto

//Nota especial:
//Objetos se pueden incluir metodos
//Los metodos son funciones que se incluyen dentro de un objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 35
}
console.log(persona);

// Incluir metodos en un objeto
let people = {
    name: 'Andy',
    lastname: 'Garcia',
    age: 30,
    fullname: function() {
        return this.name + ' ' + this.lastname;
    }
}

console.log(people.fullname());

const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 22,
    saludo: function() {
        console.log(`Hello, my name is ${this.name} ${this.lastname}`);
    }
}   

people2.saludo();

//Usando el constructor Object
//otra dorma de crear un objeto vacacion y agregar las propiedades posteriormente

const persona1 = new Object();
persona1.nombre = 'Carlos';
persona1.apellido = 'Lara';
persona1.saludo = function(){
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
}
console.log(persona1.nombre);
persona1.saludo();

// Usando la clase Object.create()

//Permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Juan';
persona2.saludar();

//Usando clases (introducidas en ES6 => ES2024)
//Proporcionar una sintaxis mas estructurada y clara para crear objetos y lidiar con la herencia
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar(){
        console.log(`Hola desde clase, soy ${this.nombre} ${this.apellido}`);
    }
}

const persona3 = new Persona('Pedro', 'Lopez');
persona3.saludar();

//Usando fucniones constructoras
//Forma clasica, utlizando no muy frecuentes

function Persona1(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        console.log(`Hola desde funcion, soy ${this.nombre} ${this.apellido}`);
    }
}

const persona4 = new Persona1('Maria', 'Gomez');
persona4.saludar();

//Manipulacion de propiedades de un objeto

//1. Agregar propiedades
const persona5 = { nombre: 'Pedro'}
persona5.edad = 30;
persona5.nombre = 'Juan';
console.log(persona5);

//2. Eliminar propiedades
//delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades de un objeto
for(let nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}
for(let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}

//4. verificar propiedades de un objeto
console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('age'));

//Metodos utilies para trabajar con objetos
//1. Object.keys()
//Devolvemos un arreglo con las claves del objeto
console.log(Object.keys(persona5));

//2. Object.values()
//Devuelve un arreglo con los valores de las propiedades del objeto
console.log(Object.values(persona5));

//3. Object.entries()
//Devuelve un arreglo con arreglos de dos elementos, cada uno con una clave y un valor
console.log(Object.entries(persona5));

//4. Object.assign()
//Copia todas las propiedades de un objeto a otro
const copia = Object.assign({}, persona5);
console.log(copia);

//5. Object.freeze()
//Evita que se puedan agregar, modificar o eliminar propiedades de un objeto
//Object.freeze(persona5);

//6. Object.seal()
//Evita que se puedan agregar o eliminar propiedades de un objeto, pero si se pueden modificar
Object.seal(persona5);
delete persona5.nombre;
persona5.direccion = 'Calle 123';
console.log(persona5);

//Nota: 
//Imprimir valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion de objetos de JavaScript
//stringfiy() convierte un objeto a un string
console.log(personaString);