const pessoa = (nome,sobreNome, peso, altura)=>{
    return{
    nome: nome,
    sobreNome: sobreNome,
    peso: peso,
    altura: altura
    };
}

//const [nome, sobreNome, peso, altura] = pessoa.split(',').map(item => item.trim());
    
let cadastroPessoa = [];

cadastroPessoa.push(pessoa('João1', 'Silva1', 70, 1.75));
cadastroPessoa.push(pessoa('Maria', 'Souza', 60, 1.65));
cadastroPessoa.push(pessoa('Pedro', 'Oliveira', 80, 1.80));
cadastroPessoa.push(pessoa('Ana', 'Costa', 55, 1.60));

for (let i=0; i < cadastroPessoa.length; i++){
    console.log("chave: " + i + ", valor: " + JSON.stringify(cadastroPessoa[i]));
}
console.log("\n");
//const pessoaUnicaa = pessoa(nome, sobreNome, parseFloat(peso), parseFloat(altura));

for(let chave in cadastroPessoa){
    console.log(`${chave}: ${JSON.stringify(cadastroPessoa[chave])}`);
}

console.log(cadastroPessoa);
console.log(cadastroPessoa.nome, cadastroPessoa.sobreNome, cadastroPessoa.peso, cadastroPessoa.altura);