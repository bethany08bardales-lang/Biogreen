let puntosTotales = 0;

function ganarPuntos() {
    const select = document.getElementById("residuo");
    const puntosASumar = parseInt(select.value);
    
    puntosTotales += puntosASumar;
    
    // Actualizar el texto en pantalla
    document.getElementById("textoPuntos").innerText = "Puntos: " + puntosTotales;
    
    alert("¡Excelente! Has sumado " + puntosASumar + " puntos a tu cuenta ecológica.");
}

function mostrarImpacto() {
    document.getElementById("impacto").style.display = "flex";
}

function mostrarPremios() {
    document.getElementById("premiosPopup").style.display = "flex";
}

function cerrarPopup(id) {
    document.getElementById(id).style.display = "none";
}