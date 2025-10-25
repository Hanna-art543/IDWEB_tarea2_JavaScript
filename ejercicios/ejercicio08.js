//Función para devolver el arreglo de manera inversa
const ingresarArreglo = (cantidad, arregloInverso) => {
    let arreglo = [];
    for (let i=0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar elemento #"+(1+i)));
        arreglo.push(elemento);
    }
    return arregloInverso(arreglo);
}

//Función arreglo inverso
const arregloInverso = (arreglo) => {
    let arregloInver = [];
    for(let i = arreglo.length-1; i >= 0; i--) {
        arregloInver.push(arreglo[i]);
    }
    return arregloInver;
}

//Mostrar resultados
let cantidad = parseInt(prompt("Ingresar cantidad de elementos:"));

alert("Lista inversa: ["+ingresarArreglo(cantidad, arregloInverso)+"]");
