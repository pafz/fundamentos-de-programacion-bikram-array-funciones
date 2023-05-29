//### Arrays ###

//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [[0, 1, 2],['a', 'b', 'c']];

//### Funciones ###

//5
function suma(num1, num2){
    return num1 + num2;
}

//6
function potenciacion(num1, num2){
    return Math.pow(num1, num2);
}

//7
function separarPalabras(string){
    return string.split(' ');
}

//8
function repetirString(string, num){
    return string.repeat(num);
}

//9
function esPrimo(num){
    for(let i = 2; i < (num/2); i++) {
        if(num % i == 0) {
            return false;
        }
    }

    return true;
}

//### Mezclando arrays y funciones ###

//10
function ordenarArray(numbers){
    return numbers.sort((a, b) => a - b);
}

//11
function obtenerPares(numbers){
    const pares = [];
    for(let number of numbers) {
        if(number % 2 ==  0) {
            pares.push(number);
        }
    }
    return pares;
}

//12 
function pintarArray(array){
    return( '[' + array.join(', ') + ']');
}

//13
function arrayMapi(arr, funct){
    return arr.map(funct);
}

//14
function eliminarDuplicados(arr){
    let arrEliminadosDupli = new Set(arr);
    return Array.from(arrEliminadosDupli);
}


/*
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
eliminarDuplicados(chars);*/


//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//### Funciones ###

//19
function multiplicacion(num1, num2){
    return num1 * num2;
}

//20
function division(num1, num2){
    return num1 / num2;
}

//21
function esPar(num){
    return num % 2 == 0 ? true : false;
}

//22
const arrayFunciones = [
    (a, b) => a+b,
    (a, b) => a-b,
    (a, b) => a*b,
]


//### Mezclando arrays y funciones ### 

//23
function ordenarArray2(numbers){
    return numbers.sort((a, b) => b - a);
}

let arrDeNums= [22, 5, 8, 0];

ordenarArray2();

//24
function obtenerImpares(numbers){
    const impares = [];
    for(let number of numbers) {
        if(number % 2 !=  0) {
            impares.push(number);
        }
    }
    return impares;
}

//25
function sumarArray(numbers){
    let result = 0;
    for(number of numbers) {
        result += number;
    }
    return result;
}

//26
function multiplicarArray(numbers){
    let result = 1;
    for(number of numbers) {
        result *= number;
    }
    return result;
}