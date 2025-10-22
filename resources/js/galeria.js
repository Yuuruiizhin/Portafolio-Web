document.addEventListener('DOMContentLoaded', function() {
    // 1. Selecciona TODAS las imágenes (<img>) que se encuentren dentro de cualquier MODAL-BODY.
    // Esto asegura que el script solo afecte a las imágenes dentro de tus modales de Bootstrap.
    const imagenesEnModales = document.querySelectorAll('.modal-body img');

    // 2. Recorre cada una de estas imágenes
    imagenesEnModales.forEach(function(imagen) {
        // Indica visualmente que la imagen es clickeable
        imagen.style.cursor = 'pointer'; 

        // 3. Añade el evento de clic
        imagen.addEventListener('click', function() {
            // Abre la imagen en su ruta de origen (src) en una nueva pestaña
            window.open(this.src, '_blank');
        });
    });
});