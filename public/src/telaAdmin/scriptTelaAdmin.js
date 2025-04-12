document.querySelector('.icone-user').addEventListener('click', function (event) {
    event.stopPropagation(); // Impede o evento de clique de se propagar para o documento
    
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Fecha o dropdown ao clicar fora dele
document.addEventListener('click', function (event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const userIcon = document.querySelector('.icone-user');

    if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});