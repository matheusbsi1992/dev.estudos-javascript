//funcao utilizada para reduzir o arryay para um unico elemento em si


const numeros = [15, 85, 1, 47, 95, 74, 2, 1, 478, 985, 62, 4, 12, 4517, 8, 4, 6, 2, 476];

//Some todos os numeros (reduce)
//Retorne um array com todos os pares (Filter)
//Retorne um valor com o dobro dos valores (Map)
const numeroReduzidos = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);

console.log(numeroReduzidos);

const numerosDobrados = numeros.map(valor => {
    return valor * 2;
})

console.log(...numeros)
console.log(...numerosDobrados)
console.log(`Meu numeros --->>> ${numeros} \n e eles dobrados ${numerosDobrados}`);
/*
* //Retorne a pessoa mais velha
 */
const pessoas = [
    { nome: 'Luiza', idade: 15 },
    { nome: 'Theo', idade: 16 },
    { nome: 'Maria', idade: 47 },
    { nome: 'Luiz', idade: 18 },
    { nome: 'Mendonca', idade: 19 },
    { nome: 'Fuica', idade: 20 }
];


const pessoaMaiVelha = pessoas.reduce(function (acumulador, valor) {

    console.log(acumulador)
    
    if (acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
    
},0);


console.log(pessoaMaiVelha)