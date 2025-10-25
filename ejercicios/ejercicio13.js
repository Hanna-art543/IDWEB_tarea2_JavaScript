//Función ingresar arreglo
function ingresarArreglo (cantidad) {
    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar el elemento #"+(i+1)));
        arreglo.push(elemento);
    }
    return arreglo;
}

//Función 
function soloUnaVez (arr) {
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));
}

//Ingresar y mostrar
//Ingresar cantidad de elementos
let cantidad = parseInt(prompt("Ingrese cantidad de elementos:"));
let arreglo = ingresarArreglo(cantidad);

alert("Arreglo de elementos únicos: "+soloUnaVez(arreglo));