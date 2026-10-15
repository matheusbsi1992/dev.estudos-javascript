


function cadastrarPessoa() {
    console.log("Cadastrando pessoa...");

    const formulario = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');


    const pessoas = [];

    const pessoa = (nome, sobreNome, altura, peso) => {
        return {
            nome,
            sobreNome,
            altura,
            peso
        }
    };

    function recebeEventoForm(evento) {
        // Nao perder os dados na devida atualização da página
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const altura = formulario.querySelector('.altura');
        const peso = formulario.querySelector('.peso');

        const novaPessoa = pessoa(nome.value, sobrenome.value, parseFloat(altura.value), parseFloat(peso.value));

        pessoas.push(novaPessoa);

        console.log(pessoas);

        const imcPessoa = calcularIMC(novaPessoa);

        resultado.innerHTML += `Nome: ${nome.value} | Sobrenome: ${sobrenome.value} | Altura: ${altura.value} | Peso: ${peso.value} | IMC: ${imcPessoa.toFixed(2)} <hr />`;

    }

    function calcularIMC(pessoa) {
        return pessoa.peso / Math.pow(pessoa.altura, 2);
    }

    //clique do botao submit
    formulario.addEventListener('submit', recebeEventoForm);

}

cadastrarPessoa();