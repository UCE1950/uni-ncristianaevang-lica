$(document).ready(function(){
    $('.slider').slick({
        dots: true, // Muestra puntos de navegación debajo del slider
        infinite: true, // Permite que el slider se deslice infinitamente (después del último, vuelve al primero)
        speed: 500, // Velocidad de la transición en milisegundos (0.5 segundos)
        fade: true, // Hace que las imágenes se desvanezcan en lugar de deslizarse
        cssEase: 'linear' // Estilo de transición suave
        autoplay: true, // Hacer que las imágenes cambien automáticamente
        autoplaySpeed: 3000 // Cambiar cada 3 segundos
    });
});
