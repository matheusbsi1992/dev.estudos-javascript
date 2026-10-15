/** 
 * && -> false && true -> false o "valor mesmo"
 * || ->
 * 
 * 
 * FALSY
 * (false | 0 | '' "" `` | null / undefined | NaN)
 */

console.log('Maria Luiza ' && true && 10);

console.log('Maria Luiza' &&  false)

//-- todos os termos logo abaixo sao condizentes a: false
console.log('Tereza' && 0 && true)
console.log('Tereza' && '' && true)
console.log('Tereza' && "" && true)
console.log('Tereza' && `` && true)
console.log('Tereza' && null && true)
console.log('Tereza' && undefined && true)
console.log('Tereza' && NaN && true)

//-- O operador lógico OR (||) só precisa ter o seu termo com true, para que todo o processo seja verdadeiro

console.log(0, '' , null , undefined , NaN, true, 'sendo o resultado com o operador (|| or) ->')
console.log(0 || '' || null || undefined || NaN || true)
console.log(0 || '' || null || undefined || NaN ||'Luiza' ||true)

const corUnica= 'azul';
const corVariada = corUnica || 'preto';

console.log(corVariada);

const a= false;
const b=0;
const c= '';
const d= "";
const e= ``;
const f=null;
const g=undefined;
const h= NaN

console.log(a || b || c || d || e || f || g || h)