//Función para ingresar y devolver un nuevo arreglo
const ingresarArreglo = (cantidad, paresCuadrados) => {
    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar entero #"+(i+1)));
        arreglo.push(elemento);
    }
    return paresCuadrados(arreglo);
}

//Función Pares al Cuadrado
const paresCuadrados = (arreglo) => {
    let arregloParesCuadrados = [];
    
    for (let elemento of arreglo) {
        if(elemento % 2 === 0){
            let elementoCuadrado = Math.pow(elemento, 2);
            arregloParesCuadrados.push(elementoCuadrado);
        }
    }
    return arregloParesCuadrados;
}

//Ingresar datos y resultados
let cantidad = parseInt(prompt("Ingresar cantidad de elementos:"));
alert("Arreglo de números pares al cuadrado:"+
    "\n["+ingresarArreglo(cantidad, paresCuadrados)+"]");