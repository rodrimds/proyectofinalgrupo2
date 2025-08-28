document.addEventListener('DOMContentLoaded', function() {
    indexReturn = function() {
        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();
        if (usuario === '' || password === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Inicio de sesión exitoso');
            sessionStorage.setItem('userSession', usuario); // Guarda la sesión
            window.location.href = 'index.html'; // Redirige al index.html
        }
    }
    
})
