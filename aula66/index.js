//--- Analise de alteracao dos valores correspondentes e sem alterar a estrutura dele.

const numeros = [15, 85, 1, 47, 95, 74, 2, 1, 478, 985, 62, 4, 12, 4517, 8, 4, 6, 2, 476];

const numerosDobrados = numeros.map(valor => {
    return valor * 2;
})

console.log(...numeros)
console.log(...numerosDobrados)
console.log(`Meu numeros --->>> ${numeros} \n e eles dobrados ${numerosDobrados}`);
/*
* Para cada elemento:
 1º Retornar apenas uma String com o nome da pessoa
 2º Retornar apenas a chave "nome" do objeto
 3º Adicionar um id em cada objeto
 */
const pessoas = [
    { nome: 'Luiza', idade: 15 },
    { nome: 'Theo', idade: 16 },
    { nome: 'Maria', idade: 17 },
    { nome: 'Luiz', idade: 18 },
    { nome: 'Mendonca', idade: 19 },
    { nome: 'Fuica', idade: 20 }
];

//--1º
const retornarObjetoComNome = pessoas.map((valor) => {
    if (valor.nome === 'Theo') {
        console.log(valor.nome);
    }
})

//--2º
const novoObjetoComNome = pessoas.map((valor, index) => {

    // delete valor.idade;
    return { nome: valor.nome };
    //console.log(valor);
    //return `${valor.nome}`
})

console.log(novoObjetoComNome);

//--3º
const novoObjetoComID = pessoas.map((value, index) => ({
    id: index + 1,
    ...value
})
)

console.log(novoObjetoComID);