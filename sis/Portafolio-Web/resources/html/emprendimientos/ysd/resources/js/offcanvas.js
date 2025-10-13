document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('data-scroll'));
        if (target) {
            // Cierra el offcanvas
            const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('staticBackdrop'));
            offcanvas.hide();
            // Espera a que termine la animación y hace scroll
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 400); // 400ms coincide con la animación de Bootstrap
        }
    });
});