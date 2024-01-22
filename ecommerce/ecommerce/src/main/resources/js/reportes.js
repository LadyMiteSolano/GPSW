document.addEventListener('DOMContentLoaded', () => {
  const datosCSV = [
    { Codigo: '123456', Producto: 'Refrigerador', Descripcion: 'Refrigerador de dos puertas con congelador.', Cliente: 'Mario', Email: 'mario@gmail.com', Técnico: 'jose P', TipoServicio: 'instalación', Fecha: '19-07-2023', Estado: 'realizado'  },

  // Función para agregar los datos a la tabla
  function agregarDatosTabla(datosCSV) {
    const tabla = document.getElementById('tablaDatos');

    datosCSV.forEach(dato => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${dato['Codigo']}</td>
        <td class="Producto">${dato['Producto']}</td>
        <td>${dato['Descripcion']}</td>
        <td>${dato['Cliente']}</td>
        <td>${dato['Email']}</td>
        <td>${dato['Tecnico']}</td>
        <td>${dato['TipoServicio']}</td>
        <td>${dato['Fecha']}</td>
        <td>${dato['Estado']}</td>
            `;
            tabla.appendChild(fila);
        });
    }