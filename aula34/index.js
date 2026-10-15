//estrutura de repeticao for classico

console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');


// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for (let i = 2; i <= 10000; i += 2) {
//     console.log(`Linhas ${i}`)
// }

console.log('Decrementando ...')

for (let i = 10; i >= 2; i -= 2) {
    console.log(`Linhas ${i}`)
}

console.log('Par ou ímpar')

for (let i = 0; i <= 10; i++) {
    const meuValor = i >= 0 && i % 2 === 0 ? 'Par' : "Ímpar";
    console.log(i, meuValor)
}

const frutas = ['Maça', 'Uva', 'Banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i} e minhas frutas ${frutas[i]}`)
}