/*
Operadores ternarios ? termo verdadeiro : termo falso 
*/


const pontuacaoUsuario = 500;

const pontuacaoFinal = pontuacaoUsuario <= 400 ? 'final': 'unico';


console.log(pontuacaoFinal);


const valorParOuImpar = 14;

const meuValor = (valorParOuImpar >= 0 && valorParOuImpar % 2 === 0) ? "par":"impar";

console.log(`Meu número ${valorParOuImpar}`,`Resultado:${meuValor}`);



