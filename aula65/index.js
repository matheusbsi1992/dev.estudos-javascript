//-- Indicacao do que pode ser realizado ou relacionado
//-- uso baseado em filter
//-- O filter sempre vai retornar a quantidade de elementos correspondentes ou 
// relacionados

const novoArray = ['Luiza', 'Elena', 'Tereza', 'Cintia'];

const valorExistente = novoArray.filter(function name(nome) {
    if (nome === 'Tereza') {
        return true;
    } else {
        return false;
    }
});

console.log(valorExistente);


const numeros = [15, 85, 1, 47, 95, 74, 2, 1, 478, 985, 62, 4, 12, 4517, 8, 4, 6, 2, 476];

let numeraisMaiores = numeros.filter(function name(params) {
    if (params <= 10) {
        return true
    } else {
        return false
    }
})

console.log(numeraisMaiores)
//Retornar o nome de uma pessoa que estiver no array de objetos (ok)
//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 18 anos
//Retorna as pessoas cujo nome termina com a letra: a
console.log('Agora indicação de Pessoa --->>>');

const pessoas = [
    { nome: 'Luiza', idade: 15 },
    { nome: 'Theo', idade: 16 },
    { nome: 'Maria', idade: 17 },
    { nome: 'Luiz', idade: 18 },
    { nome: 'Mendonca', idade: 19 },
    { nome: 'Fuica', idade: 20 }
];

const pessoaUnicaASerRetornada = pessoas.filter(listaDePessoa => {
    return listaDePessoa.nome === 'Maria' ? true : false;
})

const pessoaComCincoLetras = pessoas.filter(listaDePessoa => {
    return listaDePessoa.nome.length >= 5 ? true : false
})

const pessoaComMaisDezoitoAnos = pessoas.filter(listaDePessoa => {
    return listaDePessoa.idade >= 18 ? true : false;

})

const pessoaCujoNomeTerminaComA = pessoas.filter(listaDePessoa => {
    return listaDePessoa.nome.toLocaleLowerCase().endsWith('a');
})

console.log(pessoaUnicaASerRetornada);
console.log(pessoaComCincoLetras);
console.log(pessoaComMaisDezoitoAnos);
console.log(pessoaCujoNomeTerminaComA);

//---horizontal