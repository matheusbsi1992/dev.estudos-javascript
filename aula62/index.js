//--- Identificacao de arrays
//-- Arrays sao estruturas de dados que armazenam
//-- uma lista de elementos contidas com o processo de
//-- indexacao, ou seja, cada elemento do array possui uma determinada referencia posicional

const valorArray = ['Maria', 'Luiza', 'Helena'];

const nomes = valorArray;

console.log(valorArray.length, 'Quantidade de elementos do Array');
console.log(nomes.length, 'Quantidade de elementos do Array');

// SHIFT remove do comeco do array
console.log(nomes.shift());

console.log(nomes.filter(function (nome) {
    if (nome === 'Maria') {
        return true;
    }
}))

//POP remove praticamente do final
const elementoRemovido = nomes.pop();

console.log(valorArray, elementoRemovido);
console.log(nomes, elementoRemovido);

console.log(elementoRemovido);

valorArray[0] = 'Joana';
console.log(...valorArray);


delete valorArray[1];
console.log(...valorArray);

valorArray.push('Ana');
console.log(...valorArray);


//Adicionando ao indice na posicao inicial do meu array

valorArray.unshift('Luiza');
console.log(...valorArray);

//Adicionando ao indice na posicao final do meu arra
valorArray.push('Gerencia');
console.log(...valorArray);

//-- Processo contido utilizando o slice
const posicaoValorEspecifico = valorArray.slice(1, 2);

console.log(posicaoValorEspecifico, 'Valor especifico do array');


// forma de transformar uma String em Arrays
const meuNome = 'Matheus Santos Andrade';

const meuNovoArray = meuNome.split(' ');

console.log(meuNovoArray, 'Transformando uma String em Array');

const nomedaPessoa = meuNovoArray.join(', ').replace(/,/g, '');

console.log(nomedaPessoa, '<<<--- Nome da pessoa');

// const dataEspecifica = new Date();

// function minhasHoras() {
//     let data = new Date();

//     const minhaData = data.toLocaleDateString('pt-BR', {
//         hour12: false,
//         timeZone: 'America/Maceio'
//     });

//     const minhaHora = data.toLocaleTimeString('pt-BR', {
//         hour12: false,

//     });

//     const meusSegundos = Math.floor(data.getMilliseconds()) / 1000;

//     return `${minhaData} - ${minhaHora} | ${meusSegundos}`;
// }

// function iniciarTemporizador() {

//     setInterval(function () {
//         console.log(minhasHoras());
//     }, 1000);

// }

// iniciarTemporizador();