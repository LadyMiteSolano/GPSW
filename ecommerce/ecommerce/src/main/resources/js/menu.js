// Función para mostrar la ventana emergente
function mostrarModal() {
  document.getElementById("confirmarCerrarSesionModal").style.display = "block";
}

// Función para cerrar la ventana emergente
function cerrarModal() {
  document.getElementById("confirmarCerrarSesionModal").style.display = "none";
}

// Función para cerrar sesión si el usuario acepta
function cerrarSesion() {
  // Aquí puedes agregar la lógica para cerrar la sesión
  window.location.href = 'index.html'; // Redirige a la página 'index.html'
}

// Agregar el evento para mostrar/ocultar los submenús
$(document).ready(function () {
  $(".submenu").hide(); // Ocultar inicialmente los submenús

  // Mostrar/ocultar los submenús al hacer clic en los elementos de la barra de navegación
  $(".navbar a").click(function () {
    $(this).next(".submenu").slideToggle(200);
  });

  // Asignar el evento onclick al botón Cerrar Sesión
  $("#cerrar-sesion-btn").click(mostrarModal);
});


