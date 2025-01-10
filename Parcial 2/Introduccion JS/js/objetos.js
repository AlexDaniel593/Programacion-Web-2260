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

//Metodo GET en objetos de JS
//Metodos que se usan a manera de buenas practicas que permiten acceder y modificar objetos

//Acceder a los valores de las propiedades
let personaGET = {
    nombre: 'Leo',
    apellido: 'Messi',
    email: 'lmessi@espe.edu.ec',
    edad: 34,
    get nombreCompleto (){   //No es una propiedad, es ahora un metodo get
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(personaGET.nombreCompleto);

//Metodo Set en objetos de JS
//Set establecer o modificar los valores de los atributos de los objetos

let personaSET = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo',
    email: 'cronaldo@espe.edu.ec',
    edad: 35,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto (){   //No es una propiedad, es ahora un metodo get
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(personaSET.lang);

//set
let personaSET2 = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo',
    email: 'cronaldo@espe.edu.ec',
    edad: 35,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto (){   //No es una propiedad, es ahora un metodo get
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(personaSET2.lang);
personaSET2.lang = 'en';
console.log(personaSET2.lang);

//Constructores en JS
//Si se desea crear multiples objetos con las mismas propiedades y metodos, se puede usar un constructor
//Una funcion especial que permite trabajar con objetos

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padreFC = new PersonaFC('Juan', 'Perez', 'padre@gmail.com');//Instancia de un objeto
console.log(padreFC);

let madreFC = new PersonaFC('Laura', 'Quinteros', 'madre@hotmail.com');
console.log(madreFC);

padreFC.telefono = '0999999999';
console.log(padreFC);
console.log(madreFC);

//Agregar un metodo a una funcion constructora de objetos

function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let padreFCM = new PersonaFCM('Juan', 'Perez', 'padre@gmail.com');
console.log(padreFCM.nombreCompleto());
let madreFCM = new PersonaFCM('Maria', 'Quinteros', 'madre@gmail.com');
console.log(padreFCM.nombreCompleto());

//Uso de prototype 
//agregar una nueva propiedad en tiempo de ejecucion
PersonaFCM.prototype.telefono = '0999999999';
console.log(padreFCM);
console.log(madreFCM);


//Uso de Call
let personaCall1 = {
    nombre: 'Diego',
    apellido: 'Salas',
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let personaCall2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

//Para usar el meotodo nombreCompleto de personaCall1 en personaCall2

console.log(personaCall1.nombreCompleto());
console.log(personaCall1.nombreCompleto.call(personaCall2));

//como pasar parametros a una funcion con call
let personaCallP1 = {
    nombre: 'Diego',
    apellido: 'Salas',
    nombreCompleto: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let personaCallP2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

console.log(personaCallP1.nombreCompleto('Lic', '0999999999'));
console.log(personaCallP1.nombreCompleto.call(personaCallP2, 'Ing', '0999999999'));

//uso del metodo apply
//similar a call, pero los parametros se pasan en un arreglo

let personaApply1 = {
    nombre: 'Diego',
    apellido: 'Salas',
    nombreCompleto: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let personaApply2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let arreglo = ['Ing', '0999999999'];
console.log(personaApply1.nombreCompleto.apply(personaApply2, arreglo));
console.log(personaApply1.nombreCompleto.apply(personaApply2, ['Lic', '0999999999']));