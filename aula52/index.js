//escopo lexico
// Os valores contidos de atributos globais sao definidos na inclusao 
// de ser visto como o Pai e relacionado a determinada funcao
// relacionada a ela(s);
// Ou seja, ela sera vista onde foi definida em todo o contexto

const nome = 'Maria';

function falaNome() {
    console.log(nome);
}

//falaNome();

function usaFalaNome() {
    const nome = 'Maria Luiza';
    falaNome();
}

usaFalaNome();

