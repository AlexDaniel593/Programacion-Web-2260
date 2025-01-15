//Sistema Ventas

//✅Creacion de la clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, stock, categoria) {
        if (Producto.validarPrecio(precio)) {
            this._idProducto = ++Producto.contadorProductos; // preincremento
            this._nombre = nombre;
            this._precio = precio; // use setter to validate
            this._stock = stock;
            this._categoria = categoria;
        }
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (Producto.validarPrecio(precio)) {
            this._precio = precio;
        }
    }

    static validarPrecio(precio) {
        if (precio < 0) {
            console.log('El precio no puede ser negativo');
            return false;
        } else {
            return true;
        }
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    get categoria() {
        return this._categoria;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, stock: ${this._stock}, categoria: ${this._categoria}`; //`` template string ${} interpolar
    }

}

//✅Creacion de la clase Orden
class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    } // constante de clase

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._totalVenta = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        // Verificar si hay stock disponible
        if (producto.stock > 0) {
            // Verificar si no hemos superado el maximo de productos existentes
            if (this._productos.length < Orden.MAX_PRODUCTOS) {
                this._productos.push(producto);
                producto.stock--;
            } else {
                console.log('No se pueden agregar mas productos a la orden');
            }
        } else {
            console.log(`No hay stock disponible para el producto: ${producto.nombre}`);
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto._precio; // totalVenta = totalVenta + producto._precio;
        }
        this._totalVenta = totalVenta;
    }

    calcularImpuestos(impuesto) {
        this.calcularTotal();
        let totalImpuestos = this._totalVenta * (impuesto / 100);
        this._totalVenta += totalImpuestos;
    }

    descuentoCategoria() {
        this.calcularTotal();
        let totalDescuento = 0;
        for (const producto of this._productos) {
            if (producto.categoria === 'Electronica') {
                totalDescuento += producto._precio * 0.10;
            }
        }
        this._totalVenta -= totalDescuento;
    }

    mostrarOrden() {
        if (this._totalVenta == 0) {
            this.calcularTotal();
        }
        let productosOrden = '';
        for (const producto of this._productos) {
            productosOrden += '\n{ ' + producto.toString() + ' }';
        }

        console.log(`Orden: ${this._idOrden}, Total: $${this._totalVenta}, Productos: ${productosOrden}`);
    }

    listarProductosDescendente() {
        let productosOrdenados = this._productos.slice().sort((a, b) => b.precio - a.precio);
        console.log(`Productos en orden descendente por precio: \n${productosOrdenados.join('\n')}`);
    }

}


// Probando la clase Orden

let producto1 = new Producto('Pantalon', 200, 1, 'Ropa');
let producto2 = new Producto('Camisa', 100, 2, 'Ropa');
let producto3 = new Producto('Cinturon', 50, 5, 'Ropa');
let producto4 = new Producto('Reloj', 100, 2, 'Electronica');
let producto5 = new Producto('Celular', 500, 2, 'Electronica');

let orden = new Orden();

orden.agregarProducto(producto1);
orden.agregarProducto(producto2);
orden.agregarProducto(producto3);
orden.agregarProducto(producto1);
orden.agregarProducto(producto4);
orden.agregarProducto(producto2); // No hay stock
orden.agregarProducto(producto2); // No hay stock

orden.descuentoCategoria('Electronica');
orden.calcularImpuestos(16);

orden.listarProductosDescendente();

orden.mostrarOrden();

// Ejerciocio RETO
/*
1. Stock disminuye
2. Descuento por categoria'
   Crea una nueva propiedad categoria en la clase Producto
3. Aplicacion de impuestos
4. Listar los productos en forma descendente
5. Restriccion adicional
    Aseguremos que los precios no pueden ser negativos al establecer en la clase Producto
*/