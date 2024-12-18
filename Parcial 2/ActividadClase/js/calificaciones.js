let estudiantes = [
    ['David', notas = [20, 19, 10, 15, 18, 20, 18, 19, 20, 20]],
    ['Carlos', notas = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]],
    ['Maria', notas = [15, 15, 15, 15, 15, 15, 15, 15, 15, 15]],
    ['Juan', notas = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]],
    ['Pedro', notas = [20, 19, 10, 15, 18, 20, 18, 19, 20, 20]],
    ['Jose', notas = [20, 19, 10, 15, 18, 20, 18, 19, 20, 20]],
    ['Luis', notas = [20, 19, 10, 15, 4, 3, 2, 19, 20, 20]],
    ['Ana', notas = [20, 19, 10, 15, 18, 20, 18, 19, 20, 20]],
    ['Sofia', notas = [20, 19, 10, 15, 7, 20, 18, 19, 20, 20]],
    ['Laura', notas = [20, 19, 4, 15, 18, 20, 18, 19, 20, 20]]
]


for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i][2] >= 16) {
        estudiantes[i][3] = 'Excelente';
    } else if (estudiantes[i][2] >= 12 && estudiantes[i][2] < 16) {
        estudiantes[i][3] = 'Bueno';
    } else if (estudiantes[i][2] >= 8 && estudiantes[i][2] < 12) {
        estudiantes[i][3] = 'Aprobado';
    } else if (estudiantes[i][2] < 8) {
        estudiantes[i][3] = 'Reprobado';
    }
}



function imprimirEstudiantes(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        console.log('*************');
        console.log('Nombre: ' + estudiantes[i][0]);
        console.log('Nota maxima: ' + estudiantes[i][1].reduce((max, nota) => nota > max ? nota : max, estudiantes[i][1][0]));
        console.log('Nota minima: ' + estudiantes[i][1].reduce((min, nota) => nota < min ? nota : min, estudiantes[i][1][0]));
        let promedio = estudiantes[i][1].reduce((sum, nota) => sum + nota, 0) / estudiantes[i][1].length;
        console.log('Promedio: ' + promedio);
        let estado ='';

        if (promedio >= 16) {
            estado = 'Excelente';
        } else if (promedio >= 12 && promedio < 16) {
            estado = 'Bueno';
        } else if (promedio >= 8 && promedio < 12) {
            estado = 'Aprobado';
        } else if (promedio < 8) {
            estado = 'Reprobado';
        }

        console.log('Estado: ' + promedio);
        console.log('*************');
        console.warn('');
    }
}

let peorPromedio = estudiantes.reduce((peor, estudiante) => estudiante[2] < peor ? estudiante[2] : peor, estudiantes[0][2]);
console.log('El peor promedio es: ' + peorPromedio);

let mejorPromedio = estudiantes.reduce((mejor, estudiante) => estudiante[2] > mejor ? estudiante[2] : mejor, estudiantes[0][2]);
console.log('El mejor promedio es: ' + mejorPromedio);
