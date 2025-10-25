//Función para evaluar un número 
function evaluarNumero (a) {
    if(a > 0) {
        return "El número "+a+" es positivo.";
    }
    else if (a === 0) {
        return "El número "+a+" es igual a 0.";
    }
    else {
        return "El número "+a+" es negativo.";
    }
}

//Ingresar número
let num = parseInt(prompt("Ingrese un número:"));
alert(evaluarNumero(num));

