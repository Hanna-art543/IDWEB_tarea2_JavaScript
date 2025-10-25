//Función mostrar resultado
function mostrarResultado (a, b, dobleResultado) {
    let resultado = a + b;
    return dobleResultado(resultado);
}

//Función para calcular el doble
function dobleResultado(resultado) {
    return 2 * resultado;
}

//Ingresar y mostrar resultado 
let num1 = parseInt(prompt("Ingresar primer número:"));
let num2 = parseInt(prompt("Ingresar segundo número:"));

alert("El doble de la suma es: " + mostrarResultado(num1, num2, dobleResultado));

