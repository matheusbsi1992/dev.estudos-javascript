/*
Utilizacao de break e continue
*/

// Continue, para a proxima iteracao
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero === 2) {
        console.log(numero, 'Numero encontrado - (PULOU) !!!')
        continue;
    }

    if (numero === 7) {
        console.log(numero, 'Numero encontrado - (PAROU) !!!')
        break;
    }

}