/*  
* Uso de constantes e variáveis em JavaScript
  */

let nome = "Matheus Andrade";
let idade = 33;
const pi = 3.14;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Pi:", pi);

// Tentando reatribuir uma constante (isso causará um erro)
nome = "Maria Luiza"; // Uncaught TypeError: Assignment to constant variable.

// Reatribuindo uma variável
idade = 34;
console.log("Nova Idade:", idade, "Nome", nome);


///--- Outra etapa

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

const resultadoDcuplicado = resultado * 2;

console.log("Resultado:", resultado);
console.log("Resultado Duplicado:", resultadoDcuplicado);