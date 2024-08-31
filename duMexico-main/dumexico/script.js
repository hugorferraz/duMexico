let currentIndex = 0;
const items = document.querySelectorAll('.cardapio-item');
const totalItems = items.length;
const container = document.querySelector('.cardapio-container');
const itemWidth = items[0].offsetWidth;
const spacing = 30; // Espaçamento entre os itens
const visibleItems = 3; // Número de itens visíveis ao mesmo tempo

// Duplicar os itens para criar um loop contínuo
function duplicateItems() {
    items.forEach(item => {
        container.appendChild(item.cloneNode(true)); // Clonar itens para o final do contêiner
    });
    for (let i = 0; i < totalItems; i++) {
        container.prepend(container.lastElementChild.cloneNode(true)); // Clonar itens para o início do contêiner
    }
}

// Ajustar o contêiner para que tenha largura suficiente
function adjustContainerWidth() {
    const containerWidth = (itemWidth + spacing) * (totalItems * 3); // Três conjuntos de itens
    container.style.width = `${containerWidth}px`;
}

// Inicializar o carrossel
function initCarousel() {
    duplicateItems();
    adjustContainerWidth();
    container.style.transform = `translateX(-${(itemWidth + spacing) * totalItems}px)`; // Posicionar inicialmente
}

// Mover para o índice desejado
function moveToIndex(index) {
    container.style.transform = `translateX(-${(itemWidth + spacing) * index}px)`;
}

// Iniciar o carrossel e garantir transição contínua
function startCarousel() {
    const intervalTime = 3000; // Tempo entre as transições
    const moveDistance = totalItems + visibleItems; // Número total de itens para o loop contínuo

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= moveDistance) {
            // Ajusta a transição para criar um efeito contínuo
            container.style.transition = 'none'; // Desabilita a transição para reposicionar instantaneamente
            container.style.transform = `translateX(-${(itemWidth + spacing) * totalItems}px)`; // Reposiciona para o início do loop
            currentIndex = visibleItems; // Move o índice para o início dos itens visíveis
            setTimeout(() => {
                container.style.transition = `transform 0.5s ease-in-out`; // Reabilita a transição
                moveToIndex(currentIndex); // Move para o próximo item
            }, 50);
        } else {
            moveToIndex(currentIndex);
        }
    }, intervalTime); // Define o intervalo para a rotação
}

// Inicializar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    startCarousel();
});


