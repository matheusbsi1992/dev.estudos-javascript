/**Identificacao com For of */

//-- For classico - Geralmente com iteraveis (array ou strings)
//-- For in -- Retorna o indice ou chave (array, strings ou objetos). Mais utilizado em objetos
//-- For of -- Retorna o valor em si (iteraveis, strings ou arrays). Mais utilizadao em Arrays

const nome = ['Maria Luiza', 'Helena Maria', 'Pedrosa']
///-- com classico com cada iteracao do laco
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
console.log('#####')
for (let i in nome) {
    console.log(i, nome[i])
}
console.log('#####')
//--- Coletar logo o valor existente
// Funciona com String e Arrays
// Utilizada com (AWAIT)
// Nao existe indice aqui e propriamente dito, para Objetos nao e indicado
for (let nomePessoa of nome) {
    console.log(nomePessoa.toUpperCase())
}

console.log('#####')

nome.forEach(valor => {
    console.log(valor)
});

console.log('#####');

nome.forEach(function (valor, indice) {
    console.log(valor, indice)
});