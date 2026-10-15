// Uso de String

let umTexto = "Olá, mundo!";


console.log(`${umTexto}`);

console.log(umTexto.length); // Exibe o número de caracteres na string
console.log(umTexto.toUpperCase()); // Converte a string para maiúsculas
console.log(umTexto.toLowerCase()); // Converte a string para minúsculas
console.log(umTexto.includes("mundo")); // Verifica se a string contém a palavra "mundo"
console.log(umTexto.replace("mundo", "JavaScript")); // Substitui "mundo" por "JavaScript"
console.log(umTexto.split(",")); // Divide a string em um array usando ", " como separador
console.log(umTexto.charAt(0)); // Exibe o primeiro caractere da string
console.log(umTexto.indexOf("mundo",5)); // Exibe a posição da palavra "mundo" na string
console.log(umTexto.lastIndexOf("d",10)); // Exibe a posição da última ocorrência da palavra "Olá" na string
console.log(umTexto.substring(0, 5)); // Exibe os caracteres da posição 0 a 4 (5 não é incluído)
console.log(umTexto.trim()); // Remove espaços em branco no início e no final da string     
console.log(umTexto.startsWith("Olá")); // Verifica se a string começa com "Olá"
console.log(umTexto.endsWith("!")); // Verifica se a string termina com "!"
console.log(umTexto.repeat(3)); // Repete a string 3 vezes
console.log(umTexto.padStart(20, "*")); // Preenche a string com "*" no início até atingir 20 caracteres
console.log(umTexto.padEnd(20, "*")); // Preenche a string com "*" no final até atingir 20 caracteres   
console.log(umTexto.slice(0, 5)); // Exibe os caracteres da posição 0 a 4 (5 não é incluído)
console.log(umTexto.substring(0, umTexto.length - 6)); // Exibe os caracteres da posição 0 a 4 (5 não é incluído)
console.log(umTexto.slice(-6)); // Exibe os últimos 6 caracteres da string  
console.log(umTexto.search("mundo")); // Exibe a string sem o último caractere
console.log(umTexto.split(" ")); // Divide a string em um array usando " " como separador