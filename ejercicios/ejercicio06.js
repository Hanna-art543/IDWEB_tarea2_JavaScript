//Funcion para recibir un arreglo
const recibirArreglo = (a, sumaPositivos)=> {
    let arreglo = [];
    for(let i=0; i < a; i++) {
        let elemento = parseInt(prompt("Ingresa el número #"+(i+1)));
        arreglo.push(elemento);
    }
    return sumaPositivos(arreglo);
} 

const sumaPositivos = (arreglo) =>{
    let suma = 0;
    for(let num of arreglo) {
        if(num >= 0) {
            suma += num;
        }
    }
    return suma;
}

//Mostrar los resultados
let cantidadElementos = parseInt(prompt("Ingresar número de elemento de la lista:"));

alert("La suma de los números positivos es: "+recibirArreglo(cantidadElementos, sumaPositivos));

