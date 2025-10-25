//Función ingresar arreglo
function ingresarArreglo (cantidad) {
    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        let elemento = parseInt(prompt("Ingresar el elemento #"+(i+1)));
        arreglo.push(elemento);
    }
    return arreglo;
}

//Función diferencia simétrica
function diferenciaSimetrica (a, b) {
    let diferencia = a.filter(x => !b.includes(x));
    return diferencia;
}

//Ingresar arreglos y mostrar resultado
let cantidad = parseInt(prompt("Cantidad de elementos de ambos arreglos:"));
let arreglo1 = ingresarArreglo(cantidad);
let arreglo2 = ingresarArreglo(cantidad);

alert("Arreglo de los elementos solo del primer arreglo:"+
    "\n["+diferenciaSimetrica (arreglo1, arreglo2)+"]"
)