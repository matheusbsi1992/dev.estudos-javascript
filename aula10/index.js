/*

Operadores aritméticos
+ (Adição e concatenação) - * / % 

*/

const num1 = 10;
const num2 = 3;

const resultadoSoma = num1 + num2;
const resultadoSubtracao = num2 - num1;
const resultadoMultiplicacao = num1 * num2;
const resultadoDivisao = num1 / num2;
const resultadoResto = num1 % num2;

const valorUnicoPotencializacao = Math.pow(num1, num2); // num1 elevado a num2

const potencializacao = num1 ** num2; // num1 elevado a num2

let contador = 1;

console.log("Resultado da soma:", resultadoSoma);
console.log("Resultado da subtração:", resultadoSubtracao);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Resultado da divisão:", resultadoDivisao.toFixed(2)); // Exibe o resultado com 2 casas decimais
console.log("Resultado do resto:", resultadoResto);
console.log("Resultado da potencialização:", potencializacao);
console.log("Resultado da potencialização (Math.pow):", valorUnicoPotencializacao);
console.log("Concatenando strings:", "Olá, " + "mundo!");
console.log(contador++); // Incrementa o contador em 1
var valoIncrementado = contador++;
console.log(++contador); // Incrementa o contador em 1 antes de exibir
console.log(contador--); // Decrementa o contador em 1
console.log(--contador); // Decrementa o contador em 1 antes de exibir


// NaN - Not a Number (Não é um número) - resultado de operações matemáticas inválidas
let resultadoInvalido = num1 / "texto";
console.log("Resultado de operação inválida:", resultadoInvalido); // NaN


// Nao e um número, mas é do tipo number
resultadoInvalido = num1 * "5";
console.log("Tipo de NaN:", typeof resultadoInvalido, "Resultado Final indicado:", resultadoInvalido); // number

// especificação com conversão de string para número
resultadoInvalido = num1 * Number("5");
console.log("Resultado com conversão explícita, com Number:", resultadoInvalido); // 50

resultadoInvalido = num1 * parseInt("5");
console.log("Resultado com conversão explícita, com parseInt:", resultadoInvalido); // 50

resultadoInvalido = num1 * parseFloat("5.5");
console.log("Resultado com conversão explícita, com parseFloat:", resultadoInvalido); // 55