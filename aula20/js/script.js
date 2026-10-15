function criarUsuario() {

    console.log("Criacao de dados de usuario");

    const formulario = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    const pessoa = (nome, sobrenome, altura, peso) => {
        return {
            nome,
            sobrenome,
            altura,
            peso
        }
    };

    // Aqui é indicado por tipo de evento (onsubmit, onclick, onmouseover, etc.) e atribuindo uma função diretamente a ele. 
    // No entanto, essa abordagem tem algumas limitações, como a incapacidade de adicionar múltiplos ouvintes para o mesmo evento e a possibilidade de sobrescrever acidentalmente um ouvinte existente.
    // formulario.onsubmit = function (evento) {
    //     // previ
    //     evento.preventDefault();

    //     alert(1);
    //     console.log("Evento de submit acionado");
    // };

    // formulario deve ser declarado antes do evento de submit, caso contrário, o evento não será registrado corretamente. 
    // Certifique-se de que o código que seleciona o formulário e adiciona o ouvinte de evento 
    // esteja dentro da função criarUsuario() e seja executado após a definição do formulário no HTML.
    //addEventListener é a forma mais recomendada de adicionar eventos, 
    // pois permite adicionar múltiplos ouvintes para o mesmo evento sem sobrescrever os anteriores, 
    // além de ser mais flexível e fácil de gerenciar.
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const altura = formulario.querySelector('.altura');
        const peso = formulario.querySelector('.peso');
        
        //console.log(nome.value,sobrenome.value,parseFloat(altura.value),parseFloat(peso.value));

        const novaPessoa = pessoa(nome.value, sobrenome.value, parseFloat(altura.value), parseFloat(peso.value));

        const calculoIMC = novaPessoa.peso /  Math.pow(novaPessoa.altura, 2);

        pessoas.push(novaPessoa);
        
        console.log(pessoas);
    
        resultado.innerHTML += `<hr/> Nome: ${pessoas[pessoas.length - 1].nome} <br /> Sobrenome: ${pessoas[pessoas.length - 1].sobrenome} <br /> Altura: ${pessoas[pessoas.length - 1].altura} <br /> Peso: ${pessoas[pessoas.length - 1].peso} <br />
        IMC: ${calculoIMC.toFixed(2)} <hr />`;


        
        //console.log(`Nome: ${nome}`);
        //console.log(`Sobrenome: ${sobrenome}`);
        //console.log(`Altura: ${altura}`);
        //console.log(`Peso: ${peso}`);
    }

    //escuta "acoes" do usuario, como submit, click, mouseover, etc.
    formulario.addEventListener('submit',recebeEventoForm);

}

criarUsuario();