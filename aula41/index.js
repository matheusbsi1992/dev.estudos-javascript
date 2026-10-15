//-- Escreva uma funcao que receba dois numeros e retorne o maior deles

function numeroMaior(min, max) {
    return max >= min ? max : min;
}

const numero1 = 7, numero2 = 8;
console.log(numero1, numero2)
console.log(numeroMaior(numero1, numero2));

console.log('###########');

const valorMaximoMinimo = (max, min) => { return max > min ? max : min }

console.log(valorMaximoMinimo(5, 6))