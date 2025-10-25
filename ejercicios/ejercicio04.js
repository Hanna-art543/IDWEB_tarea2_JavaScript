const calcularTotal = (a, b, mostrarResultado) => {
    let total = a + b;
    mostrarResultado(total);
}
//Función callback
function mostrarResultado(total) {
    alert("El total es: " + total);
}

//Mostrar resultado
let p1 = parseFloat(prompt("Ingrese el primer precio:"));
let p2 = parseFloat(prompt("Ingrese el segundo precio:"));

calcularTotal(p1, p2, mostrarResultado);

