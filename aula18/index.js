
//---uso de arrow function para criar funções de forma mais concisa
const valorUnicoSoma = (a, b) => a + b;

console.log(`O valor único da soma é: ${valorUnicoSoma(5, 10)}`);

const valorUnicoMultiplicacao = (a = 0, b = 0) => (a * b) + valorUnicoSoma(a, b);

console.log(`O valor único da multiplicação é: ${valorUnicoMultiplicacao(5, 10)}`);

const valorRaizQuadrada = (numero) => Math.sqrt(numero) ;

console.log(`A raiz quadrada é: ${valorRaizQuadrada(16)}`);

//---- PARTE DE OBJETOS EM JAVASCRIPT
// --- Existe a atribuição sobre o dados contidos ao Array, 
// já que ele é const, mas se for let/var pode sim exister a devida alteração do array, 
// ou seja, a atribuição de um novo array, mas o conteúdo do array pode ser alterado mesmo sendo const,
// pois o array é um objeto mutável.
const array = [1, 2, 3];

array[0]= 'Primeiro elemento';

console.log(array+" - Alterou o primeiro elemento do array \n");

//array='literal'; // Isso não é permitido, pois array é uma constante

console.log(array);

array.push(5);

console.log(array);

array.shift();

console.log(array);

array.unshift(0);

console.log(array);

array.forEach((elemento) => {
    console.log(elemento);
});


//--- Identificacao de objetos

function criarPessoa(nome,sobreNome,idade){
    return{
        nome: nome,
        sobreNome: sobreNome,
        idade: idade       
    };
}

const pessoa1 = criarPessoa('João1', 'Silva1', 20);
const pessoa2 = criarPessoa('João2', 'Silva2', 21);
const pessoa3 = criarPessoa('João3', 'Silva3', 22);
const pessoa4 = criarPessoa('João4', 'Silva4', 23);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa1.nome, pessoa1.sobreNome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobreNome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobreNome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobreNome, pessoa4.idade);


const pessoaUnica ={
    nome: 'João1',
    sobreNome: 'Silva1',
    idade: 20,

    fala(){
        console.log(`Olá, meu nome é ${this.nome} ${this.sobreNome} e tenho ${this.idade} anos.`);
    },
    incrementaIdade(){
        return ++this.idade;
    }
}

console.log(pessoaUnica);
pessoaUnica.fala();

console.log(`Minha idade incrementada é: ${pessoaUnica.incrementaIdade()}`);

