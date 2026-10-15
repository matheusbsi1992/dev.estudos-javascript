//-- Function fábrica (function factory)
//-- A funcao fabrica é uma funcao que retorna um objeto propriamente dito

function criaPessoa(nome, sobrenome,idade,altura,peso) {

    return{
        nome:nome,

        sobrenome:sobrenome,

        idade,

        fala: function(assunto) {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}. E a sua idade é ${this.idade} 
            e a sua altura: ${this.altura} e o seu peso: ${this.peso}.`;
        },

        altura:altura,

        peso:peso,

        IMC: function() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        set nomeCompleto(valor){    
            console.log(valor);
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
        
    }
};

const p1 = criaPessoa('Matheus', 'Andrade',15,1.85,80);
console.log(p1.fala('JS'),p1.IMC());
p1.nomeCompleto = 'Matheus Andrade --->>>> Setter';
console.log(`Meu nome: ${p1.nomeCompleto} --->>>> Getter`);

const p2 = criaPessoa('João', 'Silva', 20, 1.65, 75);
console.log(p2.fala('Python'),p2.IMC());