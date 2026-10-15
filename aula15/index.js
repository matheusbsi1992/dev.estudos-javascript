let num1 = 9.505050;
let num2 = Math.floor(num1); // arredonda para baixo
let num3 = Math.ceil(num1); // arredonda para cima
let num4 = Math.round(num1); // arredonda para o número mais próximo

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(100 / 0); // retorna Infinity

console.log(-100 / 0); // retorna -Infinity

console.log(0 / 0); // retorna NaN (Not a Number)

console.log(typeof Infinity); // retorna "number"

console.log(typeof NaN); // retorna "number"

console.log(Number.isNaN(NaN)); // retorna true

console.log(Number.isNaN(100)); // retorna false

console.log(Number.isFinite(Infinity)); // retorna false

console.log(Number.isFinite(-Infinity)); // retorna false

console.log(Number.isFinite(100)); // retorna true

console.log((num1 ** (1/2))); // a raiz quadrade de num1

console.log(Math.sqrt(num1)); // a raiz quadrade de num1

console.log(Math.max(1, 2, 3, 4, 5)); // retorna o maior número

console.log(Math.min(1, 2, 3, 4, 5)); // retorna o menor número

console.log(Math.random()); // retorna um número aleatório entre 0 e 1

console.log(Math.round(Math.random() * (10 - 1) + 1)); // retorna um número aleatório entre 1 e 10  

console.log(Math.pow(2, 3)); // 2 elevado a 3 (8)

console.log(Math.sqrt(16)); // raiz quadrada de 16 (4)

console.log(Math.abs(-5)); // valor absoluto de -5 (5)

console.log(Math.PI); // valor de pi (3.141592653589793)

console.log(Math.E); // valor de e (2.718281828459045)

console.log(Math.sin(0)); // seno de 0 (0)

console.log(Math.cos(0)); // cosseno de 0 (1)

console.log(Math.tan(0)); // tangente de 0 (0)

console.log(Math.log(1)); // logaritmo natural de 1 (0)