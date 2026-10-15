/*Uso de while e do while*/

// let controle = 1;

// //--- Enquanto a minha condicao dor verdadeira
// while (controle <= 10) {
//     console.log(`Indicacao de WHILE: ${controle}`);
//     controle++;
// }

// let quantidadeExistente = 0;
// do {
//     //-- Enquanto os meus passos forem verdadeiros
//     quantidadeExistente++;

//     console.log(`Indicacao de DO - WHILE: ${quantidadeExistente}`);
// } while (quantidadeExistente < 10);


function random(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const valorMin = 1, valorMax = 20;
console.log(valorMin, valorMax);

//let valorUnico = random(valorMin, valorMax);
let valorUnico = 10;

while (valorUnico !== 10) {
    valorUnico = random(valorMin, valorMax);
    console.log(valorUnico);
}

console.log('#######');

do {
    valorUnico = random(valorMin, valorMax);
    console.log(valorUnico);
} while (valorUnico !== 10);

// const valor = Math.random() * 10;

// console.log(valor.toFixed(1));




