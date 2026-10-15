
let num1 = prompt ('Informe o primeiro numero');
let num2 = prompt ('Informe o segundo numero');


console.log(`Numero 1: ${num1}`);
console.log(`Numero 2: ${num2}`);

alert(`O resultado da soma é: ${Number(num1) + Number(num2)}`);
alert(`O resultado da subtração é: ${Number(num1) - Number(num2)}`);
alert(`O resultado da multiplicação é: ${Number(num1) * Number(num2)}`);
alert(`O resultado da divisão é: ${(Number(num1) / Number(num2)).toFixed(2)}`);

if(num1 % 2 === 0){
    alert(`O resultado e par`)
}else{
    alert(`O resultado e impar`)
}