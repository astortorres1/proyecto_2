// Objeto para almacenar la información del formulario
const formulario = {
    principal: document.getElementById('principal'),
    tasa: document.getElementById('tasa'),
    periodos: document.getElementById('periodos'),
    resultado: document.querySelector('.resultado')
};

// Función para calcular el interés con funciones de orden superior
function calcularInteres(calculoInteres) {
    const valores = obtenerValores();

    if (valores.some(isNaN)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const { principal, tasa, periodos, resultado } = formulario;
    const tasaPorPeriodo = tasa.value / 100;

    resultado.innerHTML = '';

    const resultadosPorPeriodo = Array.from({ length: parseInt(periodos.value) }, (_, i) => {
        const total = calcularTotal(principal.value, tasaPorPeriodo, i + 1, calculoInteres);
        return `Después de ${i + 1} periodos, el monto total es: $${total.toFixed(2)} ARS`;
    });

    resultadosPorPeriodo.forEach(result => {
        resultado.innerHTML += `${result}<br>`;
    });
}

// Función para resetear el formulario
function resetearFormulario() {
    const { principal, tasa, periodos, resultado } = formulario;

    principal.value = '';
    tasa.value = '';
    periodos.value = '';
    resultado.innerHTML = '';
}

// Función para obtener los valores del formulario
function obtenerValores() {
    const { principal, tasa, periodos } = formulario;
    return [parseFloat(principal.value), parseFloat(tasa.value), parseInt(periodos.value)];
}

// Función de orden superior para calcular el total
function calcularTotal(principal, tasaPorPeriodo, periodo, calculoInteres) {
    return calculoInteres(principal, tasaPorPeriodo, periodo);
}

// Función de orden superior I para calcular el total con la fórmula original
function calcularInteresOriginal(principal, tasaPorPeriodo, periodo) {
    return principal * Math.pow(1 + tasaPorPeriodo, periodo);
}

// Función de orden superior II para calcular el total con otra fórmula
function calcularInteresAlternativo(principal, tasaPorPeriodo, periodo) {
    // Implementa una fórmula alternativa según tus necesidades
    return principal * (1 + tasaPorPeriodo * periodo);
}
