class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    precioAscendente() {
        let productosOrdenados = this.productos.sort((a, b) => a.precio - b.precio);

        return productosOrdenados;
    }

    precioDescendente() {
        let productosOrdenados = this.productos.sort((a, b) => b.precio - a.precio);
    }

    filtrarPorCategoria(categoria) {
        let productosFiltrados = this.productos.filter(producto => producto.categoria === categoria);

        return productosFiltrados;
    }
}

class Ventas {

    #ventas = []; // Encapsulamiento debido a que el atributo ventas no debe ser modificado directamente
    constructor() {
        this.ventas = [];
    }

    get ventas() {
        return this.#ventas;
    }

    set ventas(ventas) {
        this.#ventas = ventas;
    }

    realizarVenta(nombreProducto, cantidad) {
        let producto = inventario.productos.find(producto => producto.nombre === nombreProducto);

        if (producto) {
            if (producto.cantidad >= cantidad) {
                producto.cantidad = (producto.cantidad - cantidad);
                let precio = producto.precio; 
                // obtener el precio del producto en ese instante porque en un futuro se podria tener un descuento que afecte el calculo del total de ingresos
                this.#ventas.push({ nombreProducto, cantidad, fecha: new Date(), precio }); // agregar la fecha de la venta y el precio
                console.log('Venta realizada'); // mensaje de confirmacion
            } else {
                console.log('Cantidad insuficiente');
            }
        } else {
            console.log('Producto inexistente');
        }
    }

    totalIngresos() {
        totalIngresos = 0;
        for (let i in ventas.ventas) {
            totalIngresos += ventas.ventas[i].precio * ventas.ventas[i].cantidad;
            // como almacenamos el precio en el momento de la venta, se multiplica por la cantidad vendida
            // no es necesario consultar el precio del producto en el inventario
        }
        return totalIngresos;

    }

    productoMasVendido() {
        let productosVendidos = {};

        for (let i in ventas.ventas) {
            if (productosVendidos[ventas.ventas[i].nombreProducto]) {
                productosVendidos[ventas.ventas[i].nombreProducto] += ventas.ventas[i].cantidad;
            } else {
                productosVendidos[ventas.ventas[i].nombreProducto] = ventas.ventas[i].cantidad;
            }
        }

        let masVendido = Object.keys(productosVendidos).reduce((a, b) => productosVendidos[a] > productosVendidos[b] ? a : b);
        return masVendido;
    }

}


class Descuentos {
    constructor(inventario) {
        this.inventario = inventario;
    }

    aplicarDescuento(categoria, porcentaje) {
        let productos = this.inventario.filtrarPorCategoria(categoria); // con el uso de this.inventario se accede a la propiedad inventario

        for (let i in productos) {
            productos[i].precio = productos[i].precio - (productos[i].precio * porcentaje / 100);
        }
    }
}


let inventario = new Inventario();
let ventas = new Ventas();
let descuentos = new Descuentos(inventario);

let producto1 = new Producto('Samsung A35', 500, 10, 'Smartphone');
let producto2 = new Producto('Samsung A55', 600, 5, 'Smartphone');
let producto3 = new Producto('Samsung A15', 200, 15, 'Smartphone');
let producto4 = new Producto('MSI G66', 800, 20, 'Laptop');
let producto5 = new Producto('MSI G77', 900, 10, 'Laptop');
let producto6 = new Producto('MSI G88', 1000, 5, 'Laptop');

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
inventario.agregarProducto(producto4);
inventario.agregarProducto(producto5);
inventario.agregarProducto(producto6);

ventas.realizarVenta('Samsung A35', 3);
ventas.realizarVenta('Samsung A55', 1);
ventas.realizarVenta('MSI G66', 2);
descuentos.aplicarDescuento('Smartphone', 10);
ventas.realizarVenta('Samsung A35', 1);

// Imprimir un reporte detallado que incluya:
// ▪ Inventario actualizado.
// ▪ Ventas realizadas con fecha y hora (utilizando objetos Date).
// ▪ El total de ingresos generados y el producto más vendido.
console.log('----------------------------------');
console.log('               Reporte detallado');
console.log('----------------------------------');

console.log('Inventario actualizado');
console.log(inventario.productos);
console.log('Ventas realizadas');
console.log(ventas.ventas);
console.log('Total de ingresos: ' + ventas.totalIngresos());
console.log('Producto más vendido: ' + ventas.productoMasVendido());
