//Función ingresar arreglo
function ingresarArreglo (cantidad) {
    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar el elemento #"+(i+1)));
        arreglo.push(elemento);
    }
    return arreglo;
}

//Función contar elementos únicos
function contarElementosUnicos (arreglo) {
    let elementosUnicos = new Set(arreglo);
    return elementosUnicos.size;
}

//Ingresar cantidad de elementos
let cantidad = parseInt(prompt("Ingrese cantidad de elementos:"));
let arreglo = ingresarArreglo(cantidad);

alert("Elementos únicos: "+contarElementosUnicos(arreglo));

