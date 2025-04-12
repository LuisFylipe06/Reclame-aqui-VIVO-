document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const users = [
        { username: "Admin", password: "123456", redirect: "../telaAdmin/tela-admin.html" },
        { username: "User", password: "654321", redirect: "../telaPostagens/telaPostagens.html" }
    ];

    const user = users.find(user => user.username === login && user.password === password);

    if (user) {
        
        window.location.href = user.redirect;
    } else {
        // Exibe uma mensagem de erro
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Login ou senha incorretos. Tente novamente.";
        errorMessage.style.color = "red";
    }
});
