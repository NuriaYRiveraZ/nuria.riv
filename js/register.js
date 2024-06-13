$(document).ready(function() {
    $('#sexo').change(function() {
        if ($(this).val() === 'otro') {
            $('#otroGeneroContainer').slideDown().find('input').attr('required', true);
        } else {
            $('#otroGeneroContainer').slideUp().find('input').removeAttr('required').val('');
        }
    });

    $('#edad').change(function() {
        var fechaNacimiento = new Date($(this).val());
        var hoy = new Date();
        var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var mes = hoy.getMonth() - fechaNacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (edad < 18) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });

    $('#email').on('input', function() {
        var email = $(this).val();
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });

    // Validación de formulario al enviar
    $('#registroForm').submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var isValid = form[0].checkValidity();

        if (isValid) {
            alert('Formulario válido. Enviando...');
        } else {
            $(this).find(':input[required]:invalid').addClass('is-invalid').closest('.mb-3').find('.invalid-feedback').show();
        }
    });
});