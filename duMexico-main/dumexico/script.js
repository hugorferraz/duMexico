let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.cardapio-item');
    if (slides.length === 0) return; // Evita erros se não houver slides

    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight); // Inclui margem direita
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransform = -currentIndex * slideWidth + 'px';
    document.querySelector('.cardapio-container').style.transform = `translateX(${newTransform})`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Inicializa o carrossel e define a rotação automática
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(() => moveSlide(1), 3000); // Muda automaticamente a cada 3 segundos
});
