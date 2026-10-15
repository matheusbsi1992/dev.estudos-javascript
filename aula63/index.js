//--- utilizacao de splice
//              -5,      -4,        -3,     -2,      -1    
//               0,       1,         2,      3,       4
const nomes = ['Maria', 'Luiza', 'Helena', 'Joana', 'Ana'];
//nomes.splice(indice, quantidade de elementos a serem removidos, elementos a serem adicionados);
const novoNome = ['Matheus', 'Tereza', 'Mendy', 'Tuica', 'Dimas', 'Ana'];
const nomeNovo = nomes.splice(0, 1, ...novoNome);

console.log(nomes, 'Array com elementos adicionados');
console.log(nomeNovo, 'Array com elementos removidos');


//-- removendo elementos de posicao diferente do array (ou seja de uma posicao invertida)
const novoValorArrayNomes = nomes.splice(0,1,'Abba');
console.log(novoValorArrayNomes,nomes)