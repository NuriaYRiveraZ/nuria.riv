$(document).ready(function() {
    $('#btn-login').click(function(e) {
        e.preventDefault();

        var usuario = $('#usuario').val().trim();
        var contrasena = $('#contrasena').val().trim();

        if (usuario === '' || contrasena === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Simulación de inicio de sesión exitoso con usuario demo
        if (usuario === 'user' && contrasena === '123') {
            alert('Inicio de sesión exitoso. Redirigiendo a la página de timeline...');
            window.location.href = '../html/timeline.html';
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
            $('#contrasena').val('');
            $('#contrasena').focus();
        }
    });
});