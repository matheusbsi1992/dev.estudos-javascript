// TODAS AS FUNCAOS SAO TRATADAS COMO OBJETOS DE PRIMEIRA CLASSE

//declaracao de funcao (funcao hoisting)-- Este tipo de funcao pode ser agregada em quaisquer local especifico do meu codigo
//sendo declarada acima ou ate mesmo abaixo dela.
olaOI();

function olaOI() {
    console.log('Fala oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const meuNome = function () {
    console.log('Matheus');
}

function meuUnicoNome(minhaFuncao) {
    console.log('Irei executar a sua funcao correspondente !!!')
    minhaFuncao();
}

meuUnicoNome(meuNome);

//meuNome();

// Arrow function
const arrowFunction = () => {
    console.log('Teste casa de MARIA !!!');
}

arrowFunction();

const obj = {
    falar: falarComMaria = () => {
        console.log('CASA DE MARIA')
    }
}
obj.falar();