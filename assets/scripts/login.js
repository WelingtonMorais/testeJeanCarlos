document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha os valores de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simule a autenticação no backend
    if (username === 'admin' && password === 'password') {
        // Armazenar a informação de autenticação na sessionStorage
        sessionStorage.setItem('authenticated', 'true');

        // Redirecione para a página principal (main.html)
        window.location.href = './pages/main.html';
    } else {
        // Exiba um alerta informando credenciais inválidas
        alert('Credenciais inválidas. Tente novamente.');
    }
});
