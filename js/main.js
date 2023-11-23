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
}

function resetearFormulario() {
    document.getElementById('principal').value = '';
    document.getElementById('tasa').value = '';
    document.getElementById('periodos').value = '';
    document.querySelector('.resultado').innerHTML = '';
}
