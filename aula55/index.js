// funcoes imediatas 
// IIFE -> Immediately invoked function expression

function quaisquerCoisa() {
    console.log('Será executado na hora!')
}

quaisquerCoisa(); // será executado na hora!

// Este tipo de funcao e propriamente para quando quisermos criar um escopo isolado,
// Ou seja, quando quisermos que as variaveis criadas dentro da funcao nao vazem
// para o escopo global

(function() {

    const nome = 'Matheus';

    function falaNome(){
        console.log(nome);
    }
    falaNome();

    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})(); // o () no final faz com que a funcao seja executada na hora