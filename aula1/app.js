console.log("Olá, mundo!");
console.log(`Olá, mundo!`);
console.log('' + "Olá, mundo!" + '');


const nome = "Matheus Andrade";
console.log(`Meu nome é ${nome}.`);

const idade = 33;
console.log(`Eu tenho ${idade} anos.`);

if(idade >= 18) {
    console.log("Eu sou maior de idade.");
} else {
    console.log("Eu sou menor de idade.");
}

console.log(`Meu ano de nascimento é: ${2026 - idade}`);

var idadeEmMeses = idade * 12;
console.log("Minha idade em meses é: " + idadeEmMeses);

var idadeEmDias = idade * 365;
console.log("Minha idade em dias é: " + idadeEmDias);

var idadeEmHoras = idadeEmDias * 24;
console.log("Minha idade em horas é: " + idadeEmHoras);

var idadeEmMinutos = idadeEmHoras * 60;
console.log("Minha idade em minutos é: " + idadeEmMinutos);

var idadeEmSegundos = idadeEmMinutos * 60;
console.log("Minha idade em segundos é: " + idadeEmSegundos);   


console.log(`Meu nome é "${nome}". Estou aprendendo JavaScript às 11:12:50 da manhã`);

console.log(`Meu nome é "${nome}" e eu tenho ${idade} anos. Meu ano de nascimento é: ${2026 - idade}. 
    Minha idade em meses é: ${idadeEmMeses}. 
    Minha idade em dias é: ${idadeEmDias}. Minha idade em horas é: ${idadeEmHoras}. 
    Minha idade em minutos é: ${idadeEmMinutos}. Minha idade em segundos é: ${idadeEmSegundos}.`);