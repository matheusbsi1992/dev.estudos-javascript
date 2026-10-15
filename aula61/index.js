// Funcao geradora, para a leitura de dados e 
// de extrema necessidade existente

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
};

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora2() {

    let i = 0;

    while (true) {
        yield i++;
    }
}

console.log('Geradora 2');
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* frutas() {
    yield* geradora1();
    yield 'Maca';
    yield 'Banana';
    yield 'Uva';
}
const frutasGeradoras = frutas();
console.log(...frutasGeradoras);

function* geradora3() {

    // com especificacao de nome da funcao
    yield function ge1() {
        console.log('Geradora 1');
    };


    return function ge2() {
        console.log('Geradora 2');
    };

    // com especificacao de nome da funcao
    yield function ge3() {
        console.log('Geradora 3');
    }
}

const g3 = geradora3();

const funcao1 = g3.next().value;
const funcao2 = g3.next().value;
const funcao3 = g3.next().value;

funcao1();
funcao2();
// -- A funcao 3 perde o devido acesso por questoes relacionadas a funcao return
funcao3();