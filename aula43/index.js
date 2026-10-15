
/// --- Eu tinha feito de uma forma totalmente diferente e com os resultados certinhos \!
// Tinha colocado console.log em vez de return, ja que assim nao existe a perca de dados existentes.

function divisivel(numero) {


    if (!tipoNumero(numero)) {
        return numero;
    }

    if (numero % 3 === 0) {
        return 'Fizz';
    }

    if (numero % 5 === 0) {
        return 'Buzz';
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    }

    return numero;
}


function tipoNumero(numero) {

    return typeof numero === 'number' && !Number.isNaN(numero);

}
// function isNumber(numero){
//    var CaractereInvalido = false;

//    for (i=0; i < numero.length; i++){
//       var Caractere = numero.charAt(i);
//       if(Caractere != "." && Caractere != "," && Caractere != "-"){
//          if (isNaN(parseInt(Caractere))|| typeof numero === 'number' && !Number(isNaN(numero))) CaractereInvalido = true;
//       }
//    }
//    return !CaractereInvalido;
// }

for (let i = 0; i <= 100; i++) {
    console.log(i, divisivel(i));
}
