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

//flashess

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

//formulario contacto copiado desde bootstrap

 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()