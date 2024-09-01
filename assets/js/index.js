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

//flashes

function mostrarOcultarImagen(element) {
    const contenedor = element.closest('.imagen-contenedor');
    contenedor.querySelector('.imagenVisible').style.display = 'none';
    contenedor.querySelector('.imagenOculta').style.display = 'block';
}

function restaurarImagen(element) {
    const contenedor = element.closest('.imagen-contenedor');
    contenedor.querySelector('.imagenVisible').style.display = 'block';
    contenedor.querySelector('.imagenOculta').style.display = 'none';
}

