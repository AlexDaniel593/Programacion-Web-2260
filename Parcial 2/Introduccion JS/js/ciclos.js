/*-----------------------------------------------
            CICLOS
-----------------------------------------------*/


const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

// Ciclo For
console.warn('***** For tradicional *****');

for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

// Ciclo For in
console.warn('***** For in *****');
for (let i in heroes) {
    console.warn(heroes[i]);
}

// Ciclo For of
console.warn('***** For of *****');
for (let heroe of heroes) {
    console.warn(heroe);
}

// Uso de la declaracion for
// se usa for tradicional cuando se necesita el control total de los indices del arreglo
// se usa for in para el manejo de los objetos, es decir para iterar un objeto o los indices de un arreglo
// se usa for of para iterar los valores directamente de un iterable (array, string, map, set, nodelist, etc)


// continue y break dentro de un ciclo for
// for (let contador = 0; contador < 10; contador++) {
//     if (contador % 2 != 0) {
//         continue; // ir a la siguiente iteracion
//     }
//     console.log(contador);
// }

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
for (let contador = 0; contador < carros.length; contador++) {
    if (contador == 2 ) {
        break; // salir del ciclo
    }
    console.log(carros[contador]);
}


//while
console.warn('***** While *****');
let i = 0;
while (carros[i]) {
    if (i == 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}


