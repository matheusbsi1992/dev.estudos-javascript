//Retorno da funcao (return) retorna algum valor

const soma = (...args) => {
    return args.toString();
}

console.log(soma(1 + 2 + 5));

// Retorno da funcao, para inicializar clouseres, em JavaScript
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const falaFraseComeco = falaFrase('Olá');
const falaFraseResto = falaFraseComeco('Mundo')

//console.log(falaFraseComeco);
console.log(falaFraseResto);

///--- Retorna valores correspondentes

function multiplicacao(numero) {
    return function multiplicarNumero(n) {
        return n * numero;
    }
}
for (let i = 1; i <= 10; i++) {
    const valorNumerais = multiplicacao(i);
    const valorIndicados = valorNumerais(5);
    console.log(`de ${i} vezes ${valorIndicados}`)
}

function criarConta() {
    let saldo = 0;

    return {
        depositar(valor) {
            saldo += valor;
        },
        consultar() {
            return saldo;
        }
    };
}

const conta = criarConta();

conta.depositar(100);
console.log(conta.consultar() * 100); // 100

function criarPessoa(...nome) {
    return {
        falar() {
            console.log(`Olá, meu nome é ${nome}`);
        },
        endereco() {
            console.log(`Meu endereco é ${nome}`)
        }
    };
}

const p1 = criarPessoa("João", 'Casa');
const p2 = criarPessoa("Maria", 'J');

p1.falar();
p2.endereco();
