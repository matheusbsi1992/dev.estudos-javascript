
/*Identificação de variáveis conforme a sua redeclaração*/
var alturaCM = 180;
var alturaM = alturaCM / 100;

console.log(`Minha altura é ${alturaM} metros.`);

//--- com var pode redeclarar a variável, o que pode causar problemas
var alturaM = 1.80;
console.log(`Minha altura é ${alturaM} metros (redeclarada).`);

//--- com let não é possível redeclarar a variável, o que ajuda a evitar erros
let pesoKG = 68;
console.log(`Meu peso é ${pesoKG} kg.`);

//--- com const não é possível redeclarar ou reatribuir a variável, o que garante que o valor permaneça constante
const nomeCompleto = "Matheus Santos Andrade";
console.log(`Meu nome completo é ${nomeCompleto}.`);

//--- tentando reatribuir uma constante (isso causará um erro)
nomeCompleto = "Maria Luiza"; // Uncaught TypeError: Assignment to constant variable.