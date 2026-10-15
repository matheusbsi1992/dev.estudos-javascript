function minhaDataPrevista() {
    console.log('Data...');

    const resultado = document.querySelector('.resultado');

    const data = new Date();

    //De forma correlacionada ao dia correspondente
    // 0 - Domingo e 6 - Sábado
    const diaDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

    console.log(diaDaSemana);

    const diaSemana = data.getDay();

    const valorUnico = `${diaDaSemana[diaSemana]}, ${data.toLocaleDateString('pt-BR')} ${data.toLocaleTimeString('pt-BR')}`;

    console.log(valorUnico)

    function mesRespectivo(meuMes) {
        switch (meuMes) {
            case 1:
                return 'Janeiro'
            case 2:
                return 'Fevereiro'
            case 3:
                return 'Março'
            case 4:
                return 'Abril'
            case 5:
                return 'Maio'
            case 6:
                return 'Junho'
            case 7:
                return 'Julho'
            case 8:
                return 'Agosto'
            case 9:
                return 'Setembro'
            case 10:
                return 'Outubro'
            case 11:
                return 'Novembro'
            case 12:
                return 'Dezembro'
            default:
                return 'Não existe este mês'

        }
    }
    const valorResultadoData = `${diaDaSemana[diaSemana]} ${data.getDate()} de ${mesRespectivo(data.getUTCMonth() + 1)} de ${data.getFullYear()} ${data.toLocaleTimeString('pt-BR')}`;
    //  exemplo de saida: segunda-feira, 7 de outubro de 2019 22:49

    resultado.innerHTML = `${valorUnico} | ${valorResultadoData}`;

}

minhaDataPrevista();

function atualizar() {
    minhaDataPrevista();
    setTimeout(atualizar, 1000);
}
atualizar();


// function informarDadosIMC() {
//     console.log('Meu IMC ...');

//     const formulario = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');
//     let mensagem = "";


//     const dadosIMC = (nome, peso, altura) => {
//         return {
//             nome,
//             peso,
//             altura
//         }
//     };


//     const validarNumero = (valor) => {
//         const numero = parseFloat(String(valor).replace(',', '.'));
//         return Number.isFinite(numero) && numero > 0 ? numero : null;
//     };

//     const obterMensagemErro = (peso, altura) => {
//         if (peso === null) return 'Peso inválido. Informe um valor numérico.';
//         if (altura === null) return 'Altura inválida. Informe um valor numérico.';
//         return '';
//     };

//     function informarDadosIMC(evento) {
//         evento.preventDefault();

//         const entradaNome = document.querySelector('.nome');
//         const entradaPeso = document.querySelector('.peso');
//         const entradAltura = document.querySelector('.altura');

//         const nome = entradaNome.value;
//         const meuPeso = validarNumero(Number(entradaPeso.value));
//         const altura = validarNumero(Number(entradAltura.value));

//         if (!meuPeso || meuPeso === NaN || meuPeso === null) {
//             resultado.innerHTML = '\n Peso inválido. Informe um valor numérico.';
//             return;
//         }

//         if (!altura || altura === NaN || altura === null) {
//             resultado.innerHTML = '\n Altura inválida. Informe um valor numérico.';
//             return;
//         }

//         //  const erro = obterMensagemErro(meuPeso, altura);
//         //  if (erro) {
//         //      resultado.innerHTML = `<p class="erro">${erro}</p>`;
//         //      return;
//         // }

//         console.log(nome, meuPeso, altura);

//         const pesoPessoa = dadosIMC(nome, meuPeso, altura);

//         console.log(pesoPessoa);

//         const minhaMensagem = resultadoTipo(parseFloat(calcularIMC(pesoPessoa)));

//         resultado.innerHTML = `Nome: ${nome}|Peso: ${meuPeso} | Altura: ${altura} | Tipo de peso: ${mensagem}`

//         // entradaNome.value = '';
//         // entradaPeso.value = '';
//         // entradAltura.value = '';
//         formulario.reset();
//     };

//     function resultadoTipo(imcPessoa) {
//         if (imcPessoa < 18.5) {
//             mensagem = `Abaixo do peso e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         if (imcPessoa >= 18.5 && imcPessoa <= 24.9) {
//             mensagem = `Peso normal e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         if (imcPessoa >= 25.0 && imcPessoa <= 29.9) {
//             mensagem = `Sobrepeso e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         if (imcPessoa >= 30.0 && imcPessoa <= 34.9) {
//             mensagem = `Obesidade grau I e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         if (imcPessoa >= 35.0 && imcPessoa <= 39.9) {
//             mensagem = `Obesidade grau II e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         if (imcPessoa > 40.0) {
//             mensagem = `Obesidade grau III e IMC : ${imcPessoa.toFixed(2)}`;
//         }
//         return mensagem;
//     }

//     function calcularIMC(pesoPessoa) {
//         return pesoPessoa.peso / Math.pow(pesoPessoa.altura, 2);
//     }


//     formulario.addEventListener('submit', informarDadosIMC);
// }

// informarDadosIMC();