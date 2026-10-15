/*Identificacao da aula 36 (For in)*/

//--- O padrao identificado:

const frutas = ['uva', 'pera', 'maçã']

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//--- Identificacao unica com IN (in)
// Pois este tipo so relaciona a leitura do indice ou chaves do objeto
for (let i in frutas) {
    console.log(i, frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Otavio',
    idade: 30
}

for (const key in pessoa) {

    if (!Object.hasOwn(pessoa, key)) continue;

    const element = pessoa[key];

    console.log(`${key}:`,`${element}`)

}