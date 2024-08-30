//Inicio imagen firma

function mostrarOcultarImagenes() {
    const imagenUno = document.getElementById("imagen-firma-uno");
    const imagenDos = document.getElementById("imagen-firma-dos");

    if (imagenUno.style.display !== "none") {
        imagenUno.style.display = "none";
        imagenDos.style.display = "block";
    } else {
        imagenUno.style.display = "block";
        imagenDos.style.display = "none";
    }
}


//Flashes 
function mostrarOcultarImagen(element) {
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'block';
}

function restaurarImagen(element) {
    element.style.display = 'block';
    element.nextElementSibling.style.display = 'none';
}

