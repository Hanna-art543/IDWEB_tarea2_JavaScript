//Función para devolver los múltiplos de un número
const ingresarArreglo = (cantidad, num, multiplosNum) => {
    let arreglo = [];
    for (let i=0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar elemento #"+(1+i)));
        arreglo.push(elemento);
    }
    return multiplosNum(arreglo, num);
}

//Función para contar los múltiplos
const multiplosNum = (arreglo, num) => {
    let contador = 0;
    for (let elemento of arreglo) {
        if(elemento % num === 0) {
            contador++;
        } 
    }
    return contador;
}

//Mostrar resultados
let cantidad = parseInt(prompt("Ingrese la cantidad de elementos: "));
let num = parseInt(prompt("Número del cuál deben ser múltiplos:"))
alert("Cantidad de múltiplos de "+num+" = "+ingresarArreglo(cantidad, num, multiplosNum));

