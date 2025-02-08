/****************************
 * Fetch API
 **************************/

/*Fetch API en JS permite hacer solicitudes http de manera sencilla utilizando promesas*/

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) //convertir la respuesta de la api en formato JSON
//     .then(data => console.log(data)) //mostrar la respuesta en consola
// .catch(error => console.log('Error: ' , error)); //capturar errores

// //Metodo POST

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ //convertir a string
//         title: 'Nuevo Post',
//         body: 'Contenido del Post',
//         userId: 1
//     })
// })
// .then(response => response.json())
// .then(data => console.log('Respuesta: ',data))
// .catch(error => console.log('Error: ' , error));


// Mediantes funciones asincronas
// async function obtenerDatos() {
//     try {
//         let response = await
//         fetch('https://jsonplaceholder.typicode.com/posts/3'); //esperamos la respuesta del servidor
//         let data = await response.json(); //convirtiendo la respuesa a JSON
//         console.log(data);
               
//     } catch (error) { //PAra el manejo de errores
//         console.error('Error: ', error);
//     }
// }

// console.log('Datos obtenidos ', obtenerDatos()); //Promise {<pending>}

//cuando utilizamos fetch api
//cuando necesitamos hacer solicitudes http al nevegador
//para interactuar con apis rest (JSON placeholder, Firebase, etc)
//Uso moderno del consumo de apis

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const list = document.getElementById('users');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = 'Usuario ' + user.id + ': ' + user.name;
        list.appendChild(li);
    });
})
.catch(error => console.log('Error: ' , error));