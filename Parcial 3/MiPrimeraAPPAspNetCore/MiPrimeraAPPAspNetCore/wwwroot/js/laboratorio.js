window.onload = function () {
    listarLaboratorio();
}

let objLaboratorio;
async function listarLaboratorio() {

    objLaboratorio = {
        url: "Laboratorio/ListarLaboratorio",
        cabeceras: ["Id Laboratorio", "Nombre", "Direccion", "Persona Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "personaContacto"],
        divContenedorTabla: "divContenedorTabla"
    }

    pintar(objLaboratorio);
}

function buscarLaboratorio() {
    let form = document.getElementById("frmBusqueda");
    let frm = new FormData(form);

    fetchPost("Laboratorio/FiltrarLaboratorio", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function limpiarLaboratorio() {

    LimpiarDatos("frmBusqueda");
    listarLaboratorio();
}