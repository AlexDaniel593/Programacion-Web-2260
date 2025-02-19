
window.onload = function () {
    listarSucursal();
}

let objSucursal;
async function listarSucursal() {

    objLaboratorio = {
        url: "Sucursal/ListarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"]
    }

    pintar(objLaboratorio);
}

function filtrarSucursal() {
    let nombre = get("txtNombreSucursal");

    if (nombre == "") {
        listarSucursal();
    } else {
        objLaboratorio.url = "Sucursal/FiltrarSucursal/?nombre=" + nombre,
            pintar(objLaboratorio);
    }
}

function buscarSucursal() {
    let form = document.getElementById("frmBusqueda");
    let frm = new FormData(form);

    fetchPost("Sucursal/FiltrarSucursal", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function Buscar() {
    let nombreSucursal = get("txtNombreSucursal");
    objLaboratorio.url = "Sucursal/FiltrarSucursal/?nombre=" + nombreSucursal,

        pintar(objLaboratorio);
}

function Limpiar() {
    listarSucursal();
    set("txtNombreSucursal", "");
}

function limpiarSucursal() {

    LimpiarDatos("frmBusqueda");
    listarSucursal();
}