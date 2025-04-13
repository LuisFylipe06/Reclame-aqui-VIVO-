document.querySelector('.btn-create').addEventListener('click', function (e) {
    e.preventDefault(); 


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();


    document.querySelectorAll('.error-message').forEach(msg => msg.remove());

    let isValid = true;

 
    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '12px';
        inputField.parentElement.appendChild(errorMessage);
        isValid = false;
    }


    if (name === '') {
        showError('name', 'O campo Nome e Sobrenome é obrigatório.');
    }

    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Insira um e-mail válido.');
    }

    if (telephone === '' || !/^\d{10,11}$/.test(telephone)) {
        showError('telephone', 'Insira um número de telefone válido (10 ou 11 dígitos).');
    }

    if (password === '') {
        showError('password', 'O campo Senha é obrigatório.');
    }

    if (confirmPassword === '' || confirmPassword !== password) {
        showError('confirm-password', 'As senhas não correspondem.');
    }

    // Se todos os campos forem válidos, redireciona para a tela de Home
    if (isValid) {
        window.location.href = '../telaHome/telaHome.html';
    }
});