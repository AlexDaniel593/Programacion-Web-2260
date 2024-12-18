/*-----------------------------------------------
            SENTENCIAS DE CONTROL
-----------------------------------------------*/

let numero = 2;

if (numero == 1) {
    console.log("El número es 1");
} else if (numero == 2) {
    console.warn("El número es 2");
}
else if (numero == 3) {
    console.error("El número es 3");
}  else {
    console.log("El número es cualquier otro número");
}

let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto";
}

console.warn(estacion);

//Ejercicio
//Calcular la hora del dia
/*
    6am - 11am => Buenos dias
    12pm - 18pm => Buenas tardes
    19pm - 23pm => Buenas noches
    24am - 6am => Durmiendo
*/

let horaDia = 3;
let mensaje;

// if(horaDia >= 6 && horaDia <= 11){
//     mensaje = "Buenos días";
// } else if (horaDia >= 12 && horaDia <= 18) {    
//     mensaje = "Buenas tardes";
// } else if (horaDia >= 19 && horaDia <= 23) {
//     mensaje = "Buenas noches";
// } else if (horaDia >= 0 && horaDia < 6) {
//     mensaje = "Durmiendo";
// } else {
//     mensaje = "Hora incorrecta";
// }
console.warn(mensaje);

//switch
let mesE = 12;
let estacionI = "Estación desconocida";

switch (mesE) {
    case 1: case 2: case 3:
        estacionI = "Invierno";
        break; 
    case 4: case 5: case 6: 
        estacionI = "Primavera";
        break;
    case 7: case 8: case 9:
        estacionI = "Verano";
        break;
    case 10: case 11: case 12:
        estacionI = "Otoño";
        break;
    default:
        estacionI = "Valor incorrecto";
        break;
}
console.log(estacionI);


//otra forma de utilizar el if

if(horaDia >= 6 && horaDia <= 11)
    mensaje = "Buenos días";
else if (horaDia >= 12 && horaDia <= 18)
    mensaje = "Buenas tardes";
else if (horaDia >= 19 && horaDia <= 23)
    mensaje = "Buenas noches";
else if (horaDia >= 0 && horaDia < 6)
    mensaje = "Durmiendo";
else mensaje = "Hora incorrecta";
