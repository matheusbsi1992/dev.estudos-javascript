/**
 * Atribuicao via desestruturacao
 */

// -- SPREAD e RESTO

///--- Uso de RESTO (declaracao de funcoes ou desestruturacao de dados)
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

const [primeiroNumero, segundoNumero, ...resto] = numeros; //--- 1000,2000, Resto 3000,4000,5000,6000,7000

console.log(primeiroNumero, segundoNumero);
console.log(...resto)


////--- USO de SPREAD

//ANTES
const arr = [1, 2, 3];
console.log("Original array:", arr); // [1, 2, 3]

const newArr = [5, 6, arr[0], arr[1], arr[2]];
console.log("New array (before spread operator):", newArr); // [5, 6, 1, 2, 3]

//Atual
const varNumeroSpread = [...newArr];
console.log("Novo padrao de Spread : " + varNumeroSpread);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5, 6]

//--- Uso de SPREAD com funcao
function somaExistente(a, b, c) {
    return a + b + c;
}

const minhaSoma = [1, 2, 3];

console.log(somaExistente(...minhaSoma));