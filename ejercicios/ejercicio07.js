//Función para ingresar arreglo
const recibirArreglo = (cantidad, obtenerMayorMenor) =>{
    let arreglo = [];
    for(let i = 0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar elemento #"+(i+1)));
        arreglo.push(elemento);
    }
    return obtenerMayorMenor(arreglo);
}

//Función menor, mayor
const obtenerMayorMenor = (arreglo) => {
    let menor = arreglo[0];
    let mayor = arreglo[0];

    for (let elemento of arreglo) {
        if (elemento < menor) {
            menor = elemento;
        }
        if(elemento > mayor) {
            mayor = elemento;
        }
    }
    
    return [menor, mayor];
}

//Mostrar los resultados
let cantidadElementos = parseInt(prompt("Ingresar número de elemento de la lista:"));

let resultado = recibirArreglo(cantidadElementos, obtenerMayorMenor);
alert("Lista [menor, mayor]: [" + resultado[0] + ", " + resultado[1]+"]");

