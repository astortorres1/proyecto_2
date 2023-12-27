document.addEventListener('DOMContentLoaded', function () {
    // Recuperar datos del almacenamiento local al cargar la página
    cargarDatosGuardados();
  });
  
  function calcularInteres() {
    let principal = parseFloat(document.getElementById('principal').value);
    let tasa = parseFloat(document.getElementById('tasa').value);
    let periodos = parseInt(document.getElementById('periodos').value);
  
    if (isNaN(principal) || isNaN(tasa) || isNaN(periodos)) {
      alert('Por favor, ingrese valores numéricos válidos.');
      return;
    }
  
    let tasaPorPeriodo = tasa / 100;
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
  
    for (let i = 1; i <= periodos; i++) {
      let total = principal * Math.pow(1 + tasaPorPeriodo, i);
      resultado.innerHTML += `Después de ${i} periodos, el monto total es: $${total.toFixed(2)} ARS<br>`;
    }
  
    // Guardar datos en el almacenamiento local
    guardarDatos(principal, tasa, periodos);
  }
  
  function resetearFormulario() {
    document.getElementById('principal').value = '';
    document.getElementById('tasa').value = '';
    document.getElementById('periodos').value = '';
    document.querySelector('.resultado').innerHTML = '';
  
    // Limpiar datos almacenados al resetear el formulario
    limpiarDatosGuardados();
  }
  
  function guardarDatos(principal, tasa, periodos) {
    // Guardar datos en formato JSON en el almacenamiento local
    let datosGuardados = {
      principal: principal,
      tasa: tasa,
      periodos: periodos
    };
  
    localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));
  }
  
  function cargarDatosGuardados() {
    // Cargar datos previamente guardados desde el almacenamiento local
    let datosGuardados = localStorage.getItem('datosGuardados');
  
    if (datosGuardados) {
      datosGuardados = JSON.parse(datosGuardados);
      document.getElementById('principal').value = datosGuardados.principal;
      document.getElementById('tasa').value = datosGuardados.tasa;
      document.getElementById('periodos').value = datosGuardados.periodos;
    }
  }
  
  function limpiarDatosGuardados() {
    // Limpiar datos almacenados en el almacenamiento local
    localStorage.removeItem('datosGuardados');
  }
  