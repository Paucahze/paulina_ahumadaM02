
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


document.getElementById("imagen").addEventListener("dblclick", function () {
    this.src = "assets/img/SwamiAgria/tarjeta_pequeña.jpg";
    this.style.width = "200px";
    document.getElementById("mensaje").style.display = "block";
});
