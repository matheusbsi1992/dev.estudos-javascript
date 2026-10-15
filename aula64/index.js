//-- concatenando arrays

const nomeNovo = ['Casa de Maria', 'Tereza Herrera', 'Linda']
const concatenarNovoNome = ['Fuica', 'Elenilda', 'Lirio']

console.log(nomeNovo + ' ' + concatenarNovoNome);

const concatUnico = nomeNovo.concat(concatenarNovoNome);

console.log(concatUnico);

//... o uso do spread tambem funciona ou e especifico para isto
const unicoArrayConcatenado = [...nomeNovo, 'Terra', ...concatenarNovoNome];

console.log(unicoArrayConcatenado);