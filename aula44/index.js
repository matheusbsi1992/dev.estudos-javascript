/**Identificacao de error com try catch */

function somaNumero(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError("Valores nao sao relacionados de forma correta !!!");
    }

    return x + y;
}

console.log(somaNumero(1, 2));
try {
    console.log(somaNumero(3, 2));
} catch (e) {
    console.log('Erro relacionado ao tipo de valor informado !!!');
}