//parametros da funcao
function funcao(param) {

    console.log(param)
    console.log('Teste')
}

funcao('Valor especifico');

// funcao com argumentacao do JavaScript
// A 'function' do JavaScript sustenta todos os argumentos enviados
// OBS.: Este tipo de parametro com arguments nao funciona com arrowfunction
function funcaoArgumento(a, b, c) {
    let indicadorTotal = 0;

    for (let argumento of arguments) {
        indicadorTotal += argumento;
    }
    console.log(indicadorTotal, a, b, c);
}

funcaoArgumento(1, 2, 3, 4, 5, 6, 7);

//-- Parametro com undefined ou argumentos contidos no parametro da funcao a seguir
function indefinido(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g);
}

indefinido(1, 2, 3, 4, 5)

//-- Soma dos valores correspondentes 
function soma(a, b = 0) {
    console.log(`Soma dos meus valores:${a + b}`);
}

// Sem informar o segundo parametro ou argumento
soma(2);

// funcao com desestruturacao
function funcaoName({ nome, sobreNome, idade }) {
    console.log(nome, sobreNome, idade);
}

//funcaoName({nome:'Matheus', sobreNome:'Andrade', idade:15});
let objetoPessoa = ({ nome: 'Matheus', sobreNome: 'Andrade', idade: 15 });

funcaoName(objetoPessoa);

//-- com parametro argumentativo que aceita um numero de argumentos
const meusValores = (...args)=>{
    console.log(`Minha Soma = ${args}`)
}
meusValores(1+5+2+2)

//-- Parametro de arguments em arrowfunction, mas com error, ja que ele nao aceita este tipo de codigo
const testeArrowFunction = () => {
    let indicarTotal = 0;
    for (let indicarArgumento of arguments) {
        indicarTotal += indicarArgumento;
    }
    console.log(indicarTotal);
}

//-- Tipo de error retornado
/**
 * 0[object Object]function require(path) {
    return mod.require(path);
  }[object Object]/opt/curso/javascript-typescript/aula50/index.js/opt/curso/javascript-typescript/aula50 */
testeArrowFunction(1, 2, 3);