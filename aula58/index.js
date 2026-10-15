//-- Funcoes construtoras (constructor functions)
//-- A funcao construtora retorna um objeto e a factory tambem
// Diferencas Funcao construtora: Funcao construtora é uma funcao que cria um objeto
// , mas ela é chamada com a palavra new 
// e a factory nao precisa da palavra (new para ser chamada       
// FACTORY FUNCTION --->> COMPORTAMENTO DIFERENTES
// CONSTRUCTOR FUNCTION --->> COMPORTAMENTO COMPARTILHADOS
function Pessoa(nome, sobrenome, idade, altura, peso) {

    this.nome = nome;

    this.sobrenome = sobrenome;

    this.idade = idade;

    this.fala = function (assunto) {
        return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}. E a sua idade é ${this.idade} 
        e a sua altura: ${this.altura} e o seu peso: ${this.peso}.`;
    };

    this.altura = altura;

    this.peso = peso;

    this.IMC = function () {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
    };

    //-- Getters e Setters nomePessoa
    Object.defineProperty(this, 'nomePessoa', {
        get: function () {
            return `${this.nome}`;
        },
        set: function (nome) {
            this.nome = nome;
        }
    });

    //-- Getters e Setters
    Object.defineProperty(this, 'nomeCompleto', {
        get: function () {
            return `${this.nome} ${this.sobrenome}`;
        },
        set: function (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    });

    //-- Outra forma de criar Getters e Setters
    // this.nomeCompleto = function() {
    //     return `${this.nome} ${this.sobrenome}`;
    // };   

};

const p1 = new Pessoa('Matheus', 'Andrade', 15, 1.85, 80);
console.log(p1.fala('JS'), p1.IMC());
p1.nomeCompleto = 'Matheus Andrade --->>>> Setter';
console.log(`Meu nome: ${p1.nomeCompleto} --->>>> Getter`);

const p2 = new Pessoa('João', 'Silva', 20, 1.65, 75);
console.log(p2.fala('Python'), p2.IMC());



const p3 = new Pessoa('Maria', 'Silva', 25, 1.70, 65);
console.log(p3.nomePessoa);