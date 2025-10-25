//Función operar
const operar = (a, b, operacion) => operacion (a, b);

//Operaciones
const sumar = (a, b) => a+b;
const restar = (a, b) => a-b;
const multiplicar = (a, b) => a*b;
const dividir = (a, b) => a/b;
const potencia = (a, b) => a ** b;
const modulo = (a, b) => a % b;

//Ingresar ambos números
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

alert("Suma: "+operar(num1, num2, sumar)+
    "\nResta: "+operar(num1, num2, restar)+
    "\nProducto: "+operar(num1, num2, multiplicar)+
    "\nDivisión: "+operar(num1, num2, dividir)+
    "\nPotencia: "+operar(num1, num2, potencia)+
    "\nMódulo: "+operar(num1, num2, modulo));
