var nombre = "Daniel";
var apellido = "Guaman";
var edad = 20;
console.log("Mi nombre es " + nombre + " " + apellido + " tengo " + edad + " años");
console.log("Mi edad es " + edad + " años");

let x = 10;
let y = 20;
let z = x + y;
console.log(z);
// var ==> undeprecated
// let ==> deprecated
// const ==> deprecated

//var = declara una variable global
//let = declara una variable local o tambien una variable de bloque
//const = declara una constante es decir que no va a cambiar su valor

//if marca un bloque de codigo que se ejecuta si se cumple una condicion
//switch marca un bloque de codigo que se ejecuta si se cumple una condicion
//for marca un bloque de codigo que se ejecuta si se cumple una condicion
//fuccion marca un bloque de instrucciones que se ejecutan varias veces se declara
//try se ejecuta cuando se produce un error
//catch se ejecuta cuando se produce un error
//return devuelve un valor
//break sale de un bucle

/*
                Ejemplo de los tipos de datos
*/

//Tipos de datos String
let nombrePersona = "Ricardo";
console.log(nombrePersona);

let nombrePersona1;
nombrePersona1 = "Ricardo";
console.log(nombrePersona1);

//Tipos de datos Number
let numero = 100;
console.log(numero);

//Tipos de datos Boolean
let verdadero = true;
console.log(verdadero);

//Tipos de datos Object
let persona = {
    nombre: "Ricardo",
    apellido: "Diaz",
    edad: 20
}

console.log(persona);


//Tipo de dato typeof
console.log(typeof nombrePersona);
console.log(typeof numero);
console.log(typeof persona);
console.log(typeof verdadero);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5];
console.log(typeof let5);

//Tipo de dato tipo funcion
function saludar() { }
console.log(typeof saludar);


//Tipo de dato Symbol
let simbolo = Symbol("mi simbolo");
console.log(typeof simbolo); //puede ser utilizado por un identificador unico

//Tipo de dato clase
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

console.log(typeof Persona);

//Tipo de dato undefined se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato null se puede utilizar como un valor
let variable2 = null;
console.log(variable2);
console.log(typeof variable2);

//Tipos de datos de arreglos
let autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Tipos de datos son los generados por cadenas vacias
let cadena = "";
console.log(cadena);
console.log(typeof cadena);

//Reglas de JavaScript para declarar variables
//1. No se pueden declarar variables con palabras reservadas
//2. No se pueden declarar variables que empiecen con numeros
//3. No se pueden declarar variables que contengan espacios
//4. No se pueden declarar variables que contengan simbolos especiales
//5. No se pueden declarar variables que contengan guiones medios

let nombresCompletos = "Ricardo Diaz";
let nombres_completos = "Ricardo Diaz";
let $nombresCompletos = "Ricardo Diaz";


//Formas incorrectas
// let 1nombre = "Ricardo Diaz";
// let nombre completo = "Ricardo Diaz";
// let nombre-completo = "Ricardo Diaz";
//let #nombrecompleto = "Ricardo Diaz";

/*-------------------------------------------------
        Operadores de JavaScript
-------------------------------------------------*/

//Operadores aritmeticos
let a = 5;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Operadores de incremento y decremento
let c = 5;
c++;
console.log(c);
c--;
console.log(c);

//Pre-incremento
let d = 5;
let f = ++d;
console.log(d);
console.log(f);

//Post-incremento
let g = 5;
let h = g++;
console.log(g);
console.log(h);

//Pre-decremento
let i = 5;
let j = --i;
console.log(i);
console.log(j);

//Post-decremento
let k = 5;
let l = k--;
console.log(k);
console.log(l);

//Precedencia de operadores
//Se ejecuta de izquierda a derecha
let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let post1 = (pre1 + pre2) * pre3;
console.log(post1);

let post2 = pre3 * (pre2 + pre1);
console.log(post2);

let post3 = pre1 + pre2 * pre3;
console.log(post3);

let post4 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(post4);

//Operadores de asignacion
let operador1 = 3, operador2 = 2;
operador1 += operador2; //operador1 = operador1 + operador2
console.log(operador1);
operador1 -= operador2; //operador1 = operador1 - operador2
console.log(operador1);

//Operadores de comparacion
//Igual == // === (== solo compara el valor y === compara el valor y el tipo)
//Diferente != // !== (!= solo compara el valor y !== compara el valor y el tipo)

let var1 = 3, var2 = "3";
console.log(var1 == var2);
console.log(var1 === var2);

if (var1 === var2) {
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}

//Determinar si un numero es par o impar
let numeroParImpar = 10; // Cambia este valor para probar con otros números

if (numeroParImpar % 2 === 0) {
    console.log(numeroParImpar + " es un número par");
} else {
    console.log(numeroParImpar + " es un número impar");
}


//Determinar si una persona es mayor de edad
let edadPersona = 17;

if (edadPersona >= 18) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}


//De un conjunto de valores [12, 14, ...] de 10 valores, determinar cuantos son pares y cuantos son impares

let valores = [12, 14, 15, 16, 17, 18, 19, 20, 21, 22];
let pares = 0, impares = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("La cantidad de números pares es: " + pares);
console.log("La cantidad de números impares es: " + impares);

//Operadores logicos
//AND (&&) OR (||) NOT (!)

let s = 12;

let valMin = 12; valMax = 20;
if(s >= valMin && s <= valMax){
    console.log(s + " esta dentro del rango");
}else{
    console.log(s + " esta fuera del rango");
}

if (s < valMin || s > valMax) {
    console.log(s + " esta fuera del rango");
} else {
    console.log(s + " esta dentro del rango");
}

//Operador ternario
let resultado = (s % 2 === 0) ? "Es par" : "Es impar";
console.log(resultado);

/*-----------------------------------------------
            Conversion de tipos 
-----------------------------------------------*/
let minumero = "20";
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);
console.log(minumero2);

let minumero3 = parseInt(minumero2);
console.log(typeof minumero3);
console.log(minumero3);

//parseInt(): convierte un valor a entero sin decimales
//number: convierte un valor a numero (entero o decimal)


console.log(parseInt("42px")); // solo la parte numerica
console.log(parseInt("3.1416")); // solo la parte entera
console.log(parseInt("abc")); // no es un numero

console.log(Number("42px")); // no se puede convertir toda la cadena
console.log(Number("3.1416")); // convierte el numero a decimal
console.log(Number("abc")); // no es un numero

console.log(Number(true)); // convierte a 1
console.log(Number(false)); // convierte a 0
console.log(Number(null)); // convierte a 0
console.log(Number(undefined)); // convierte a NaN

if (isNaN(minumero)) {
    console.log("No es un numero");
}else{
    console.log("Es un numero");
}

if (parseFloat("z3.1416")) {
    console.log("Es un decimal");
} else {
    console.log("No es un decimal");
}