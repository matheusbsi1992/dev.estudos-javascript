function saudacao(nome){
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
}

saudacao("João");

function retorneSoma(a=0,b=0){

    return a + b;
}

const resultado = retorneSoma();
console.log(`O resultado da soma é: ${resultado}`);

const raizQuadrada = function (numero) {
    return Math.sqrt(numero);
}

console.log(`A raiz quadrada: ${raizQuadrada(16)}`);

const potencia = (base=0, expoente=0) => {
    return Math.pow(base, expoente);
}

let valorBase = potencia(2, 3);

console.log(`A potência é: ${valorBase}`);

//-- Arrow Function com retorno implícito
const multiplicacao = (a=0, b=0) => a * b;

console.log(`A multiplicação é: ${multiplicacao(4, 5)}`);

const valorUnico = multiplicacao(4, 5);

const somarUnico = (a=0) => a + valorUnico;

console.log(`A soma do valor único é: ${somarUnico(10)}`);