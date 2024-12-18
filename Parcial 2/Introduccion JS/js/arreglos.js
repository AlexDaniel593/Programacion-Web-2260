/*-----------------------------------------------
            ARREGLOS    
-----------------------------------------------*/

// Declaración de un arreglo

const arr = new Array(10);
const arr1 =  [];
console.log(arr);


const numeros = [1, 2, 3, 4, 5];
let colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];


let videoJuegos = ['Mario 3', 'Megaman', 'Soccer'];
console.log(videoJuegos);
console.log({videoJuegos});

let arregloCosas = [
    false,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    ['S', 'Peliculas']
];

console.log({arregloCosas});
console.log(arregloCosas[0]);

// Metodos 

// Metodos funciona
// map(), filter(), reduce()

// map() Transforma los elementos de un arreglo
let numbersMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numbersMap.map( num => num * num);
console.log({cuadrados});

//filter() filtra los elementos que cumplen algun tipo de condicion

let numbersFilter = [1, 2, 3, 4, 5, 6];
let pares = numbersFilter.filter( num => num % 2 == 0);
console.log({pares});

// reduce() reduce los elementos a un valor unico
let numbersReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = numbersReduce.reduce( (acumular, num) => (num > acumular ? num : acumular), numbersReduce[0]);
console.log({maximo});

// Ventajas
// Son ideales para trabajar con transformaciones y manipulaciones complejas de datos dentro de un arreglo
// permite un estilo de programacion funcional mas limpio y facil de leer
