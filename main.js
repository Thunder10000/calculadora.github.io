document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sumar").addEventListener("click", function() {
        operacion("sumar");
    });
    
    document.getElementById("restar").addEventListener("click", function() {
        operacion("restar");
    });
    
    document.getElementById("multiplicar").addEventListener("click", function() {
        operacion("multiplicar");
    });
    
    document.getElementById("dividir").addEventListener("click", function() {
        operacion("dividir");
    });
    
    document.getElementById("limpiar").addEventListener("click", limpiar);
});

function operacion(operador) {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

    switch (operador) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                resultado = "¡ERROR! No se puede dividir entre cero";
            } else {
                resultado = num1 / num2;
            }
            break;
    }

    document.getElementById("resultado").value = resultado;
}

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}
