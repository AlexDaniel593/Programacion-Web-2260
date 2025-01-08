class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const inventario = {
    producto1: new Producto('camisa', 100, 3),
    producto2: new Producto('pantalon', 200, 2),
    producto3: new Producto('zapatos', 300, 1),
    producto4: new Producto('gorra', 50, 5)
}

Object.seal(inventario);

function venderProducto(nombreProducto, cantidadVendida) {
    for (let key in inventario) {
        if (inventario.hasOwnProperty(key) && inventario[key].nombre === nombreProducto) {
            if (inventario[key].cantidad >= cantidadVendida) {
                inventario[key].cantidad -= cantidadVendida;
                console.log(`Venta exitosa: ${cantidadVendida} ${nombreProducto}(s) vendidos.`);
            } else {
                console.log('Venta fallida: Producto no disponible o cantidad insuficiente.');
            }
            return;
        }
    }
    console.log('Venta fallida: Producto no encontrado.');
}

function aplicarDescuento(porcentajeDescuento) {
    for (let key in inventario) {
        if (inventario.hasOwnProperty(key)) {
            inventario[key].precio -= inventario[key].precio * (porcentajeDescuento / 100);
            if (inventario[key].precio < 0) {
                inventario[key].precio = 0;
            }
        }
    }
    console.log(`Descuento del ${porcentajeDescuento}% aplicado a todos los productos.`);
}

venderProducto('camisa', 2);
venderProducto('pantalon', 1);
venderProducto('zapatos', 2);
venderProducto('gorra', 3);

aplicarDescuento(10);

console.log(inventario);