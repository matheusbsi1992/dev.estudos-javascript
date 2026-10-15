//Atribuicao via desestruturacao de objetos

const pessoa = {
    nome: 'Luiza',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        // rua: 'Av. Brasil',
        numero: 320
    }
};

console.log(pessoa)
console.log(pessoa.endereco)

// atribuicao via desestruturacao

const { nome = 'Luiza', sobrenome } = pessoa;
console.log(nome, sobrenome)
// Identificacao de termos de atributos, mas com a anterior sem quaisquer relacionamento
const { endereco: { rua: ruaNova = 'Casa', numero }, endereco } = pessoa;
// Casa, 320 {numero: 320} -->> Casa, 320 identificado com os termos de atibruicao nova
// E logo acima com a atribuicao nao mais identificada
// ...
// endereco: {
// rua: 'Av. Brasil', <-- Nao e mais identificacao como um termo do objeto
// numero: 320
// }
console.log(ruaNova, numero, endereco ,'\n');

// Atribuicao via resto
const {...resto} = pessoa;

console.log(resto);