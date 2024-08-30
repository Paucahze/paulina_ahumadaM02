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

//---------------


/*//Al pasar el mouse por el primer <div> “text1” se mostrará el segundo y al salir de él se ocultará nuevamente. 
function ocultarMensaje() {
    document.getElementById("text2").style.display = "none";
}
function mostrarMensaje() {
    document.getElementById("text2").style.display = "block";
}

// Al hacer clic en el <div> id “caja2” la imagen deberá agrandarse un 100% y al salir de ella, volver a su tamaño inicial. 
function agrandarImg() {
    document.getElementById("img").style.width = "100%";
}
function retornarImg() {
    document.getElementById("img").style.width = "20%";
}

//Con el tercer <div> la letra se agrandará al hacer doble clic en él. ONDBLCLICK */
function agrandar() {
    document.getElementById("caja3").style.fontSize = "2em";
}
function achicar() {
    document.getElementById("caja3").style.fontSize = "1em";
}

//-----




document.querySelectorAll('.imagen-contenedor').forEach(contenedor => {
    const imagenVisible = contenedor.querySelector('img:first-child');
    const imagenOculta = contenedor.querySelector('.imagenOculta');

    contenedor.addEventListener('mouseover', () => {
        imagenVisible.style.display = 'none';
        imagenOculta.style.display = 'block';
    });

    contenedor.addEventListener('mouseout', () => {
        imagenVisible.style.display = 'block';
        imagenOculta.style.display = 'none';
    });
});

//_______

