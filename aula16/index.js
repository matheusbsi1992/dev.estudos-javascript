
// Aula 16 - Manipulação de Arrays em JavaScript
// Identificação de Split com o retorno de um array
const alunos = 'Maria João Ana Pedro Lucas';
console.log(alunos.split(' '));

const alunosArray = ['Luiz', 'Maria', 'João', 'Ana', 'Pedro', 'Lucas'];
console.log(alunosArray);

alunosArray[0] = 'Matheus'; // Altera o primeiro elemento do array
console.log(alunosArray);

alunosArray.pop(); // Remove o último elemento do array
console.log(alunosArray + ' - Removeu o último elemento do array \n');

console.log(alunosArray[0]); // Acessa o primeiro elemento do array
console.log(alunosArray[1]); // Acessa o segundo elemento do array
console.log(alunosArray[2]); // Acessa o terceiro elemento do array
console.log(alunosArray[3]); // Acessa o quarto elemento do array
console.log(alunosArray[4]); // Acessa o quinto elemento do array
console.log(alunosArray[5]); // Acessa o sexto elemento do array 

alunosArray[5] = 'Carla'; // Altera o sexto elemento do array
console.log(alunosArray + " - Adicionou um elemento no final do array \n");


/*
for (let i = 0; i < alunosArray.length; i++) {
    console.log(alunosArray[i]);
}

alunosArray.forEach(function (aluno) {
    console.log(aluno);
});
*/
alunosArray.forEach((aluno) => {
    console.log(aluno);
});

alunosArray.forEach((aluno, index) => {
    console.log(`${index + 1} - ${aluno}`);
});

alunosArray.push('Carlos'); // Adiciona um elemento no final do array
console.log(alunosArray);

alunosArray.unshift('Trigo'); // Adiciona um elemento no início do array
console.log(alunosArray);

alunosArray.pop(); // Remove o último elemento do array
console.log(alunosArray);

 
alunosArray.shift(); // Remove o primeiro elemento do array
console.log(alunosArray);

console.log(alunosArray.slice(0, 3));

