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

// Agregar elementos dentro de un array
// psuh() agrega un elemento al final del arreglo
let p = [1, 2, 3, 4];
p.push(5);
console.log(p);

//unshift() agrega un elemento al inicio del arreglo
p.unshift(0);
console.log(p);

//splice() agrega un elemento en la posicion que se le indique
p.splice(2, 0, 1.5); //agrega el 1.5 en la posicion 2 sin eliminar ningun elemento
console.log(p);


// modificar elementos dentro de un array
// podemos acceder a un elemento directamente por su indice y modificarlo
let i = ['Ana', 'Juan', 'Pedro', 'Jose'];
i[1] = 'Maria';
console.log(i); 

// si deseamos modificar el arreglo de forma inmutable, podemos usar map() para crear un nuevo arreglo con los cambios
// let arregloMap = ['Azul', 'Amarrillo', 'Rojo', 'Negro'];
let arregloMap = [10, 23, 35, 26]
let nuevoArreglo = arregloMap.map( num => num === 10 ? 5 : num)
console.log(nuevoArreglo)

// splice() tambien se puede utulizar
let z = [1, 2, 3];
z.splice(1, 1, 5);
console.log(z);

//Eliminar elementos 
//pop() elimina el ultimo elemento del arreglo
let arregloE = ['Azul', 'Amarrillo', 'Rojo', 'Negro'];
arregloE.pop()
console.log(arregloE)

// shift() elimina el primer elemento de un arreglo
let arregloS = ['Azul', 'Amarrillo', 'Rojo', 'Negro'];
arregloS.shift()
console.log(arregloS)

//splice() para eliminar cualquier elemento 
let arregloSP = ['Azul', 'Amarrillo', 'Rojo', 'Negro'];
arregloSP.splice(1, 1)
console.log(arregloSP)