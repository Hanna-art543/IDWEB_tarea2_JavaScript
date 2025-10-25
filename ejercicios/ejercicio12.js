
//Función que recibe dos arreglos
function operar (arreglo1, arreglo2) {
    let union = [...new Set([...arreglo1, ...arreglo2])];
    let interseccion = arreglo1.filter(x => arreglo2.includes(x));
    let diferencia = arreglo1.filter(x => !arreglo2.includes(x));

    return [union, interseccion, diferencia];
}

//Arreglos heterogéneos
let arreglo1 = ["Hola", 111, false, "Ana"];
let arreglo2 = ["Fer", 1, true, "Hola"];

//Mostrar resultados
let resultado = operar(arreglo1, arreglo2);

alert("Unión: [" + resultado[0] +"]"+
    "\nIntersección: [" + resultado[1] +"]"+
    "\nDiferencia: [" + resultado[2]+"]");

    