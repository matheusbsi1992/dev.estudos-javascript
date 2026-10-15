/*
Aula 26. Um pouco mais sobre os numbers em JavaScript
*/


let numero1 = 0.7;
let numero2 = 0.1;

/*
numero1 += numero2; // numero1 = numero1 + numero2
numero1 += numero2; // numero1 = numero1 + numero2      
numero1 += numero2; // numero1 = numero1 + numero2      
*/

numero1 = ((numero1*100) + (numero2*100))/100; // multiplicamos por 100 para evitar o problema de precisão dos números decimais
numero1 = ((numero1*100) + (numero2*100))/100; // multiplicamos por 100 para evitar o problema de precisão dos números decimais
numero1 = ((numero1*100) + (numero2*100))/100; // multiplicamos por 100 para evitar o problema de precisão dos números decimais

console.log(numero1); // o resultado final é 1

console.log(numero1.toFixed(2)); // o resultado é 0.9, mas o esperado seria 0.7 + 0.1 + 0.1 + 0.1 = 1.0

console.log(Number.isInteger(numero1)); // verifica se numero1 é um inteiro

let num1 = 25;
let num2 = 1.51559;

console.log(num1 + num2);

console.log(num1.toString(2));// convert para um número binário

console.log(num1.toString(8)); // convert para um número octal

console.log(num1.toString(16)); // convert para um número hexadecimal

console.log(num1.toString() + num2); // concatena os números

console.log(num1.toString() + num2.toString()); // concatena os números

console.log(num1.toFixed(2)); // mostra o número com 2 casas decimais

console.log(num2.toFixed(2)); // mostra o número com 2 casas decimais

console.log(Number.isInteger(num1)); // verifica se num1 é um inteiro

console.log(Number.isInteger(num2)); // verifica se num2 é um inteiro

console.log(num1.toString()); // converte num1 para string

console.log(Number.isNaN(num1)); // verifica se num1 é NaN

console.log(Number.isNaN(num2)); // verifica se num2 é NaN

console.log(Number.isNaN(num1 + num2)); // verifica se a soma de num1 e num2 é NaN

console.log(Number.isNaN(num1 * num2)); // verifica se a multiplicação de num1 e num2 é NaN

console.log(Number.isNaN(num1 / num2)); // verifica se a divisão de num1 e num2 é NaN

console.log(Number.isNaN(num1 - num2)); // verifica se a subtração de num1 e num2 é NaN

console.log(Number.isNaN(num1 % num2)); // verifica se o resto da divisão de num1 e num2 é NaN

console.log(Number.isNaN(num1 ** num2)); // verifica se a potência de num1 e num2 é NaN
