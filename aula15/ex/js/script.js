const numero = Number(prompt('Digite um número:'));

/*** Exibe o número digitado e suas propriedades na página HTML*/
const documentoValorNumero = document.getElementById('numero');
const textoValorNumero = document.getElementById('texto');
/*** Exibe o número digitado e suas propriedades na página HTML*/

documentoValorNumero.innerHTML = numero;

textoValorNumero.innerHTML = " ";
textoValorNumero.innerHTML += `Raiz quadrada é: ${Math.sqrt(numero)}<br />`;
textoValorNumero.innerHTML += `Este número: ${numero} é inteiro: ${Number.isInteger(numero)} <br />`;
textoValorNumero.innerHTML += `É um número NaN: ${Number.isNaN(numero)}<br />`;
textoValorNumero.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br />`;
textoValorNumero.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br />`;
textoValorNumero.innerHTML += `Com duas casas decimais: ${(numero).toFixed(2)}<br />`;
textoValorNumero.innerHTML += `Com duas casas decimais R$ ${(numero).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<br />`;