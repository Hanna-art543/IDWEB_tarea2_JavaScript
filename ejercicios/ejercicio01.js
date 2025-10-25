//Declarada
function promedio1 (a, b, c) {
    return (a + b + c)/ 3;
}

//Expresada
const promedio2 = function (a, b, c){
    return (a + b + c) / 3
}

//Flecha con bloque
const promedio3 = (a, b, c) => {
    return (a + b + c) / 3;
}

//Flecha simplificada
const promedio4 = (a, b, c) => (a + b + c)/ 3; 


console.log("Declarada:", promedio1(4, 6, 8));        
console.log("Expresada:", promedio2(10, 5, 15));      
console.log("Flecha (bloque):", promedio3(2, 4, 6));  
console.log("Flecha (simple):", promedio4(7, 3, 10));