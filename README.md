# 📚 JavaScript — Objetos, Arrays, Funções e Promises

Repositório destinado aos estudos dos principais conceitos fundamentais do **JavaScript**, com exemplos práticos e exercícios relacionados a **objetos, arrays, funções e programação assíncrona**.

O objetivo é compreender não apenas a sintaxe da linguagem, mas também os conceitos utilizados no desenvolvimento de aplicações JavaScript modernas.

---

## 📌 Conteúdos

- [Objetos](#-objetos)
- [Arrays](#-arrays)
- [Funções](#-funções)
- [Promises](#-promises)
- [Async e Await](#-async-e-await)
- [Tratamento de erros](#-tratamento-de-erros)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como executar](#-como-executar)

---

## 🧩 Objetos

Objetos são estruturas utilizadas para representar entidades e agrupar informações relacionadas por meio de **propriedades** e **métodos**.

### Exemplo

```javascript
const usuario = {
    nome: "Matheus",
    idade: 30,
    profissao: "Analista de QA",

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
};

console.log(usuario.nome);
console.log(usuario.idade);

usuario.apresentar();
```

### Acessando propriedades

As propriedades podem ser acessadas utilizando a notação de ponto ou colchetes:

```javascript
console.log(usuario.nome);

console.log(usuario["idade"]);
```

### Adicionando propriedades

```javascript
usuario.email = "matheus@email.com";

console.log(usuario.email);
```

### Removendo propriedades

```javascript
delete usuario.email;
```

---

# 📦 Arrays

Arrays são estruturas utilizadas para armazenar uma coleção de valores.

```javascript
const tecnologias = [
    "JavaScript",
    "Java",
    "Python",
    "C#"
];

console.log(tecnologias);
```

Os índices dos arrays começam em `0`.

```javascript
console.log(tecnologias[0]);
console.log(tecnologias[1]);
```

---

## Principais métodos de Arrays

### `push()`

Adiciona um elemento ao final do array.

```javascript
tecnologias.push("Cypress");
```

### `pop()`

Remove o último elemento.

```javascript
tecnologias.pop();
```

### `shift()`

Remove o primeiro elemento.

```javascript
tecnologias.shift();
```

### `unshift()`

Adiciona um elemento no início.

```javascript
tecnologias.unshift("Playwright");
```

---

## `forEach()`

Executa uma função para cada elemento do array.

```javascript
tecnologias.forEach((tecnologia) => {
    console.log(tecnologia);
});
```

---

## `map()`

Cria um novo array com base no resultado da função executada para cada elemento.

```javascript
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
```

Resultado:

```text
[2, 4, 6, 8]
```

---

## `filter()`

Cria um novo array contendo apenas os elementos que atendem a determinada condição.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

Resultado:

```text
[2, 4, 6]
```

---

## `find()`

Retorna o primeiro elemento que atende à condição.

```javascript
const numeros = [10, 20, 30, 40];

const resultado = numeros.find((numero) => numero > 20);

console.log(resultado);
```

Resultado:

```text
30
```

---

## `reduce()`

Permite transformar os elementos de um array em um único resultado.

```javascript
const numeros = [1, 2, 3, 4];

const soma = numeros.reduce(
    (total, numero) => total + numero,
    0
);

console.log(soma);
```

Resultado:

```text
10
```

---

# ⚙️ Funções

Funções são blocos de código reutilizáveis responsáveis por executar determinada tarefa.

### Declaração de função

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));
```

---

## Função com parâmetros

```javascript
function apresentar(nome) {
    console.log(`Olá, ${nome}!`);
}

apresentar("Matheus");
```

---

## Arrow Functions

As **Arrow Functions** fornecem uma sintaxe mais compacta para criação de funções.

```javascript
const somar = (a, b) => {
    return a + b;
};
```

Quando existe apenas uma expressão, podemos simplificar:

```javascript
const somar = (a, b) => a + b;
```

---

## Funções como valores

Em JavaScript, funções são **first-class citizens**, podendo ser armazenadas em variáveis, passadas como argumentos e retornadas por outras funções.

```javascript
const executar = function () {
    console.log("Executando função...");
};

executar();
```

Também podemos passar uma função como argumento:

```javascript
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const resultado = executarOperacao(
    10,
    5,
    (a, b) => a + b
);

console.log(resultado);
```

---

# 🔄 Promises

Uma **Promise** representa o resultado futuro de uma operação assíncrona.

Uma Promise pode estar em três estados:

- `pending` — aguardando resultado;
- `fulfilled` — operação concluída com sucesso;
- `rejected` — operação concluída com erro.

### Criando uma Promise

```javascript
const promessa = new Promise((resolve, reject) => {

    const sucesso = true;

    if (sucesso) {
        resolve("Operação realizada com sucesso!");
    } else {
        reject("A operação falhou.");
    }

});
```

---

## `.then()`

O método `.then()` é executado quando a Promise é resolvida.

```javascript
promessa.then((resultado) => {
    console.log(resultado);
});
```

## `.catch()`

O `.catch()` permite tratar uma Promise rejeitada.

```javascript
promessa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    });
```

---

# ⏳ Async e Await

`async` e `await` fornecem uma forma mais legível de trabalhar com operações assíncronas baseadas em Promises.

Uma função declarada com `async` sempre retorna uma Promise.

```javascript
async function executar() {
    return "Operação concluída";
}
```

Podemos utilizar `await` para aguardar o resultado de uma Promise.

```javascript
async function executar() {

    const resultado = await promessa;

    console.log(resultado);
}
```

---

## Exemplo completo

```javascript
function buscarUsuario() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                nome: "Matheus"
            });

        }, 2000);

    });
}

async function obterUsuario() {

    const usuario = await buscarUsuario();

    console.log(usuario);
}

obterUsuario();
```

Nesse exemplo:

1. `buscarUsuario()` retorna uma Promise;
2. `setTimeout()` simula uma operação assíncrona;
3. `await` aguarda a resolução da Promise;
4. o resultado é armazenado em `usuario`.

---

# 🚨 Tratamento de erros

Com `async/await`, o tratamento de erros normalmente é realizado utilizando `try/catch`.

```javascript
async function obterDados() {

    try {

        const dados = await buscarUsuario();

        console.log(dados);

    } catch (erro) {

        console.error("Erro:", erro);

    }
}
```

Essa abordagem torna o fluxo de tratamento de erros semelhante ao código síncrono tradicional.

---

# 🌐 Exemplo utilizando Fetch

O `fetch()` é uma API utilizada para realizar requisições HTTP.

```javascript
async function buscarDados() {

    try {

        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const usuarios = await resposta.json();

        console.log(usuarios);

    } catch (erro) {

        console.error("Erro ao buscar usuários:", erro);

    }
}

buscarDados();
```

Fluxo:

```text
fetch()
   ↓
Promise
   ↓
await
   ↓
resposta
   ↓
.json()
   ↓
dados
```

---

# 🧠 Conceitos estudados

| Conceito | Objetivo |
|---|---|
| Objetos | Representar e organizar dados |
| Properties | Armazenar informações em objetos |
| Methods | Definir comportamentos |
| Arrays | Trabalhar com coleções de dados |
| `map()` | Transformar elementos |
| `filter()` | Filtrar elementos |
| `find()` | Localizar um elemento |
| `reduce()` | Reduzir uma coleção a um resultado |
| Funções | Reutilizar blocos de código |
| Arrow Functions | Criar funções de forma concisa |
| Callback | Passar funções como argumentos |
| Promise | Trabalhar com operações assíncronas |
| `async` | Declarar funções assíncronas |
| `await` | Aguardar uma Promise |
| `try/catch` | Tratar erros |

---

# 🧪 Aplicação nos estudos de QA

Esses conceitos são fundamentais para automação de testes com JavaScript e ferramentas como:

- **Playwright**
- **Cypress**
- **Node.js**
- **Web APIs**
- **REST APIs**
- **Automação de testes E2E**

Por exemplo, o conhecimento de `async/await`, funções, arrays e objetos é constantemente utilizado na construção de testes automatizados:

```javascript
import { test, expect } from '@playwright/test';

import * as dsl from '../tests/DSL/Core.js';

import * as XLSX from 'xlsx';

test('Identificacao de profissionais CNES', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await page.goto('https://cnes.datasus.gov.br/')

    await page.locator("#nomePesqEstab").fill('2421518');

    await page.locator(".variacao-module-01 button").click();

    const cnesHospital = await page.locator("#pesquisaValue").textContent();

    expect(await page.locator("//td[contains(., '2421518')]").textContent()).toContain(cnesHospital);

    await page.locator("//td//a[@title='Ficha estabelecimento']").click();

    await page.locator('.sidebar span:has-text("Profissionais")').click();

    await page.locator('.box-body').first().waitFor();

    const cnesRespectivo = await page.locator("//input[contains(@value,'2421518')]").textContent();
    await expect(cnesRespectivo).toBe(cnesHospital);

    //Identificar como atual
    await page.selectOption('select:visible', { value: "" });

    await page.waitForLoadState('networkidle');

    //Realizar um devido scollDown
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    //Identificar o botao de ul li respectivo a paginacao
    const booleanPaginacao = await page.locator(".pagination a:has-text('»')");
    expect(booleanPaginacao.isVisible()).toBeTruthy();

    const quantidadePaginacao = page.locator('.box-body li span');

    let numeroDePaginacao = (await quantidadePaginacao.allTextContents());

    numeroDePaginacao = numeroDePaginacao[numeroDePaginacao.length - 1];

    //await page.pause();

    const tabela = page.locator('table');

    // Cabeçalho
    const cabecalho = await tabela.locator('thead tr th').allTextContents();

    console.log('Cabeçalho:', cabecalho);

    const todosDados = [];

    for (let index = 0; index < numeroDePaginacao; index++) {

        // Pega todas as linhas da página atual
        const linhas = tabela.locator('tbody tr');

        const quantidadeLinhas = await linhas.count();

        for (let i = 0; i < quantidadeLinhas; i++) {

            const colunas = linhas.nth(i).locator('td');
            console.log('Colunas existentes', colunas);

            const valores = await colunas.allTextContents();
            console.log("Valores inclusos", valores);

            todosDados.push(
                valores.map(valor => valor.trim().replace(/\s+/g, ' '))
            );
            console.log("Valores de todos os dados", todosDados);
        }
        //await page.pause();
        // Próxima página
        await booleanPaginacao.click();

        // Aguarda a tabela atualizar
        await page.waitForLoadState('networkidle');
    }

    // Monta os dados finais
    const dadosExcel = [
        cabecalho.map(valor => valor.trim()),
        ...todosDados
    ];

    // Cria a planilha
    const worksheet = XLSX.utils.aoa_to_sheet(dadosExcel);

    // Cria o workbook
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        'Dados'
    );

    // Gera o arquivo
    XLSX.writeFile(workbook, 'profissionais_hnsc_resultado_final.xlsx');
});
```

O domínio desses conceitos facilita a criação de códigos de automação mais **legíveis, reutilizáveis e manuteníveis**.

---

# 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- ECMAScript
- Git
- GitHub

---

# 📖 Objetivo do repositório

Este projeto faz parte dos estudos de **JavaScript**, com foco na construção de uma base sólida para desenvolvimento de software e principalmente para **automação de testes de software**.

O conteúdo será evoluído gradualmente com novos exemplos, exercícios e aplicações práticas.

---

## 👨‍💻 Autor

**Matheus Andrade**

Estudos voltados para **JavaScript, QA, Automação de Testes e Desenvolvimento de Software**.
