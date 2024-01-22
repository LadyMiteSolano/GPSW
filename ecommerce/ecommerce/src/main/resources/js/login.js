function validarInicioSesion() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        // Redireccionar a la página de inicio.html si el inicio de sesión es exitoso
        window.location.href = 'menu.html';

        // Mostrar el texto de bienvenida y el enlace "Cerrar Sesión"
            var userInfo = document.getElementsByClassName('user-info');
            for (var i = 0; i < userInfo.length; i++) {
              userInfo[i].classList.add('show');
              userInfo[i].innerText = 'Bienvenido, ' + username;
            }

        return false;
    } else {
        alert('Usuario o contraseña incorrectos.');
        return false;
    }
}

function registrarse() {
var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // Aquí puedes realizar la validación de los datos ingresados por el usuario
    // Por ejemplo, verificar si el usuario ya existe, si la contraseña cumple con ciertos criterios, etc.

    // Luego, si la validación es exitosa, puedes mostrar un mensaje de registro exitoso.
    var mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.innerHTML = "¡Registro exitoso!<br>Usuario: " + username + "<br>Contraseña: " + password + "<br>Correo Electrónico: " + email;

    // Finalmente, puedes redirigir al usuario a otra página (por ejemplo, el inicio de sesión)
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 3000); // Redirigir después de 3 segundos (puedes ajustar el tiempo si lo deseas)

    // Como esta es solo una implementación básica, ten en cuenta que en un entorno real,
    // deberías realizar la lógica de guardar los datos en una base de datos o un servidor adecuado.
    // También, asegúrate de agregar la lógica de validación adecuada antes de guardar los datos.

    return false; // Evitar el envío del formulario (porque ya hemos redirigido al usuario).
}
