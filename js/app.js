// Funcionalidad para el carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 270, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -270, behavior: 'smooth' });
    });
    
    // Navegación suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Personalización de colores
    const colorPanel = document.getElementById('colorPanel');
    const colorToggle = document.getElementById('colorToggle');
    
    colorToggle.addEventListener('click', () => {
        colorPanel.classList.toggle('open');
    });
    
    // Actualizar colores
    const colorInputs = document.querySelectorAll('.color-input');
    colorInputs.forEach(input => {
        input.addEventListener('input', () => {
            document.documentElement.style.setProperty(`--color-${input.id}`, input.value);
        });
    });
});
