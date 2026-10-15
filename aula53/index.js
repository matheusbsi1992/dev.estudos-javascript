// O clouseres so tem anseio ao espoco da funcao com a sua necessidades lexicas
// OU seja ela acessa o escopo lexico da funcao
function namePerson(params) {
    return function () {
        return params;
    }
}


const meuNome = namePerson('Maria');
const nomeNovo = namePerson('Tereza')
console.log(meuNome());
console.log(nomeNovo());