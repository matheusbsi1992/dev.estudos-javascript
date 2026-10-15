const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

console.log(backgroundColorBody);

const containerBody = document.querySelector('.container');


//containerBody.style.color = 
//paragrafo.style.color = backgroundColorBody;
console.log(containerBody.style);

//--- Identificar a cor do backgrounbody, para a identificacao no texto
// do devido paragrafo
for (let param of ps) {
    param.style.background = backgroundColorBody;
    param.style.color = 'white';
    console.log(param)
}















// const elementos = [
//     { tag: 'p', texto: 'Frase1' },
//     { tag: 'div', texto: 'Frase2' },
//     { tag: 'footer', texto: 'Frase3' },
//     { tag: 'section', texto: 'Frase4' }
// ];

// function identificacaoElementosDOM() {
//     console.log('Meus Elementos da minha pagina');

//     const resultado = document.querySelector('.resultado');



//     console.log(elementos);
//     for (let i = 0; i < elementos.length; i++) {
//         console.log(elementos[i].tag, elementos[i].texto);
//     }

//     for (let i = 0; i < elementos.length; i++) {

//         const minhaDiv = document.createElement(elementos[1].tag);
//         const meuParagrafo = document.createElement(elementos[0].tag);
//         const meuFooter = document.createElement(elementos[2].tag);
//         const minhaSection = document.createElement(elementos[3].tag);

//         console.log(minhaDiv, meuParagrafo, meuFooter, minhaSection);

//         minhaDiv.className = "conteudo-principal";


//         minhaSection.innerHTML += `${elementos[i].texto}</br>`;


//         document.body.appendChild(minhaDiv);
//         document.body.appendChild(minhaSection);
//         document.body.appendChild(meuFooter);


//         resultado.innerHTML += `${elementos[i].texto}</br>`;

//     }
// };

// function identificada() {
//     console.log('Identificacao de elementos...');

//     // 1. Criar os elementos na memória
//     const divPrincipal = document.querySelector(".container");

//     const meuParagrafo = document.createElement(/*"p"*/elementos[0].tag);
//     const minhaDiv = document.createElement(/*"div"*/elementos[1].tag);
//     const meuFooter = document.createElement(/*"footer"*/elementos[2].tag);
//     const minhaSection = document.createElement(/*"section"*/elementos[3].tag);

//     // 2. Adicionar conteúdo ou classes para identificação (Opcional)
//     //minhaDiv.textContent = "Este é o conteúdo da DIV.";
//     //minhaDiv.className = "conteudo-principal";

//     // { tag: 'p', texto: 'Frase1' },
//     // { tag: 'div', texto: 'Frase2' },
//     // { tag: 'footer', texto: 'Frase3' },
//     // { tag: 'section', texto: 'Frase4' }

//     for (let i = 0; i < elementos.length; i++) {
//         meuParagrafo.innerHTML = elementos[0].texto;
//         minhaDiv.innerHTML = elementos[1].texto;
//         meuFooter.innerHTML = elementos[2].texto;
//         minhaSection.innerHTML = elementos[3].texto;
//         //divPrincipal.innerHTML += `${elementos[i].texto}</br>`;
//     }

//     //meuFooter.textContent = "© 2026 - Todos os direitos reservados.";

//     // 3. Inserir os elementos na página (dentro da tag <body>)
//     //document.body.appendChild(divPrincipal);
//     divPrincipal.appendChild(minhaDiv);
//     divPrincipal.appendChild(meuParagrafo);
//     divPrincipal.appendChild(minhaSection);
//     divPrincipal.appendChild(meuFooter);
//     //document.body.appendChild(divPrincipal);
//     //document.body.appendChild(minhaSection);
//     document.body.appendChild(divPrincipal);
// };

// //identificada();
// //identificacaoElementosDOM();

// function identificarElementosDOMHTML() {
//     console.log('Identificar elemento do DOM...');

//     const conteiner = document.querySelector('.container');
//     const divResultado = document.createElement('div');
//     console.log(conteiner);

//     for (let i = 0; i < elementos.length; i++) {
//         let { tag, texto } = elementos[i];

//         console.log(tag, texto);

//         let elementoCriado = document.createElement(tag);
//         //let textoNodeTexto = document.createTextNode(texto);


//         elementoCriado.textContent = texto;

//         //elementoCriado.innerText = texto;

//         //elementoCriado.innerHTML+=texto;

//         //elementoCriado.appendChild(textoNodeTexto);

//         divResultado.appendChild(elementoCriado);
//     }
//     conteiner.appendChild(divResultado);

//     //document.body.appendChild(conteiner);

// }

// identificarElementosDOMHTML();



// // function minhaDataPrevista() {
// //     console.log('Data...');

// //     const resultado = document.querySelector('.resultado');

// //     const data = new Date();

// //     //De forma correlacionada ao dia correspondente
// //     // 0 - Domingo e 6 - Sábado
// //     const diaDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

// //     console.log(diaDaSemana);

// //     const diaSemana = data.getDay();

// //     const valorUnico = `${diaDaSemana[diaSemana]}, ${data.toLocaleDateString('pt-BR')} ${data.toLocaleTimeString('pt-BR')}`;

// //     console.log(valorUnico)



// //     function mesRespectivo(meuMes) {
// //         switch (meuMes) {
// //             case 1:
// //                 return 'Janeiro'
// //             case 2:
// //                 return 'Fevereiro'
// //             case 3:
// //                 return 'Março'
// //             case 4:
// //                 return 'Abril'
// //             case 5:
// //                 return 'Maio'
// //             case 6:
// //                 return 'Junho'
// //             case 7:
// //                 return 'Julho'
// //             case 8:
// //                 return 'Agosto'
// //             case 9:
// //                 return 'Setembro'
// //             case 10:
// //                 return 'Outubro'
// //             case 11:
// //                 return 'Novembro'
// //             case 12:
// //                 return 'Dezembro'
// //             default:
// //                 return 'Não existe este mês'

// //         }
// //     }
// //     const valorResultadoData = `${diaDaSemana[diaSemana]} ${data.getDate()} de ${mesRespectivo(data.getUTCMonth() + 1)} de ${data.getFullYear()} ${data.toLocaleTimeString('pt-BR')}`;
// //     //  exemplo de saida: segunda-feira, 7 de outubro de 2019 22:49

// //     resultado.innerHTML = `${valorUnico} | ${valorResultadoData}`;

// // }

// // minhaDataPrevista();

// // function atualizar() {
// //   minhaDataPrevista();
// //   setTimeout(atualizar, 1000);
// // }
// // atualizar();


// // function informarDadosIMC() {
// //     console.log('Meu IMC ...');

// //     const formulario = document.querySelector('.form');
// //     const resultado = document.querySelector('.resultado');
// //     let mensagem = "";


// //     const dadosIMC = (nome, peso, altura) => {
// //         return {
// //             nome,
// //             peso,
// //             altura
// //         }
// //     };


// //     const validarNumero = (valor) => {
// //         const numero = parseFloat(String(valor).replace(',', '.'));
// //         return Number.isFinite(numero) && numero > 0 ? numero : null;
// //     };

// //     const obterMensagemErro = (peso, altura) => {
// //         if (peso === null) return 'Peso inválido. Informe um valor numérico.';
// //         if (altura === null) return 'Altura inválida. Informe um valor numérico.';
// //         return '';
// //     };

// //     function informarDadosIMC(evento) {
// //         evento.preventDefault();

// //         const entradaNome = document.querySelector('.nome');
// //         const entradaPeso = document.querySelector('.peso');
// //         const entradAltura = document.querySelector('.altura');

// //         const nome = entradaNome.value;
// //         const meuPeso = validarNumero(Number(entradaPeso.value));
// //         const altura = validarNumero(Number(entradAltura.value));

// //         if (!meuPeso || meuPeso === NaN || meuPeso === null) {
// //             resultado.innerHTML = '\n Peso inválido. Informe um valor numérico.';
// //             return;
// //         }

// //         if (!altura || altura === NaN || altura === null) {
// //             resultado.innerHTML = '\n Altura inválida. Informe um valor numérico.';
// //             return;
// //         }

// //         //  const erro = obterMensagemErro(meuPeso, altura);
// //         //  if (erro) {
// //         //      resultado.innerHTML = `<p class="erro">${erro}</p>`;
// //         //      return;
// //         // }

// //         console.log(nome, meuPeso, altura);

// //         const pesoPessoa = dadosIMC(nome, meuPeso, altura);

// //         console.log(pesoPessoa);

// //         const minhaMensagem = resultadoTipo(parseFloat(calcularIMC(pesoPessoa)));

// //         resultado.innerHTML = `Nome: ${nome}|Peso: ${meuPeso} | Altura: ${altura} | Tipo de peso: ${mensagem}`

// //         // entradaNome.value = '';
// //         // entradaPeso.value = '';
// //         // entradAltura.value = '';
// //         formulario.reset();
// //     };

// //     function resultadoTipo(imcPessoa) {
// //         if (imcPessoa < 18.5) {
// //             mensagem = `Abaixo do peso e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         if (imcPessoa >= 18.5 && imcPessoa <= 24.9) {
// //             mensagem = `Peso normal e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         if (imcPessoa >= 25.0 && imcPessoa <= 29.9) {
// //             mensagem = `Sobrepeso e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         if (imcPessoa >= 30.0 && imcPessoa <= 34.9) {
// //             mensagem = `Obesidade grau I e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         if (imcPessoa >= 35.0 && imcPessoa <= 39.9) {
// //             mensagem = `Obesidade grau II e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         if (imcPessoa > 40.0) {
// //             mensagem = `Obesidade grau III e IMC : ${imcPessoa.toFixed(2)}`;
// //         }
// //         return mensagem;
// //     }

// //     function calcularIMC(pesoPessoa) {
// //         return pesoPessoa.peso / Math.pow(pesoPessoa.altura, 2);
// //     }


// //     formulario.addEventListener('submit', informarDadosIMC);
// // }

// // informarDadosIMC();