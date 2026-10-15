/*
Matheus Santos Andrade tem 33 anos, pesa 68 KG
tem 1.80 de altura e seu IMC é de 21.0

*/

const nomePessoa = "Matheus"
const sobreNome = "Santos Andrade"
const idade = 33
const peso = 68
const altura = 1.80
let imc = peso / (Math.pow(altura, 2))
let anoDeNascimento = 2026 - idade;
//let imc = peso / (altura * altura)

console.log(`Matheus Santos Andrade tem ${idade} anos, 
pesa ${peso} KG, 
tem ${altura} de altura e seu IMC é de ${imc.toFixed(1)}
e ano de nascimento é ${anoDeNascimento}.`);