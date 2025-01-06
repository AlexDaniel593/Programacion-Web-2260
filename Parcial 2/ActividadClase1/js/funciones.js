function calcularPromedio(param1, param2, param3) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
        console.log('Todos los parámetros deben ser números');
        return null;
    }
    return (param1 + param2 + param3) / 3;
}

const determinarMayor = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Ambos parámetros deben ser números');
        return null;
    }
    return num1 > num2 ? num1 : num2;
};

const esPar = (numero) => {
    if (typeof numero !== 'number') {
        console.log('El parámetro debe ser un número');
        return null;
    }
    return numero % 2 === 0;
};

(function() {
    const promedio = calcularPromedio('a', 10, 15);
    console.log(`El promedio es: ${promedio}`);

    const mayor = determinarMayor(8, 12);
    console.log(`El mayor es: ${mayor}`);

    const par = esPar(7);
    par ? console.log('Es par') : console.log('No es par');
})();


