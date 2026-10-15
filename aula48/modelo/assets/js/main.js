const inputTarefa = document.querySelector('.input-tarefa');

const btnTarefa = document.querySelector('.btn-tarefa');

const tarefas = document.querySelector ('.tarefas');


btnTarefa.addEventListener('click',function(){

    if(inputTarefa.value === '') return;
    
    criarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13) {
        if(inputTarefa.value === '') return;
        
        criarTarefa(inputTarefa.value);
    }
});
   
function criarLi () {
    const li = document.createElement('li');
    return li;
}

function removerItemDaLista  (li){
    li.textContent += ' ';
    
    const novoBotao = document.createElement('button');
    novoBotao.textContent = 'Remover';
    //novoBotao.setAttribute('class', 'remover');
    
    li.appendChild(novoBotao);
    novoBotao.setAttribute('text','Apagar esta tarefa');
    novoBotao.setAttribute('class','remover');

    const valorExistente = li.textContent.replace('Remover', '').trim();

    novoBotao.addEventListener('click', function (e) {
    console.log(`${valorExistente} foi removido da lista`);    
        const valorFuncaoEl = e.target;

        if(valorFuncaoEl.classList.contains('remover')){
            console.log('clicou no botão remover');
            valorFuncaoEl.parentElement.remove();
            // Apagar elementos da minha lista de tarefas salvas no localStorage
            salvarTarefas();
        }
        //e.preventDefault();
        //li.remove();
    });

    // li.addEventListener('click', function (e) {
    //     console.log('remover item da lista');
    //     e.preventDefault();
    //     li.remove();
    // });
}


// Cria a funcao de tarefa relacionada a lista
// identifica o evento de click no botao e cria lista
// sendo a manipulacao do DOM, criando o elemento li e adicionando a lista de tarefas
// adicionando o botao de remover a cada item da lista.
function criarTarefa (textoInput) {
    console.log('clicou no botão');

    console.log(textoInput);

    const li = criarLi();   

    //li.appendChild(document.createTextNode(textoInput));
    li.textContent = textoInput;
    //li.appendChild(document.createTextNode(textoInput));

    tarefas.appendChild(li);
    
    removerItemDaLista(li);
    limparInput();

    salvarTarefas();
    
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    //console.log(liTarefas);

    const listaTarefas = [];

    for (let tarefa of liTarefas){
        listaTarefas.push(tarefa.innerText.replace('Remover', '').trim());
        console.log(`Listando valores: ${listaTarefas}`);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    console.log(`Lista de tarefas em JSON: ${tarefasJSON}`);

    // Salvar a lista de tarefas no localStorage (no meu navegador)
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas(){
    const tarefasLocais=localStorage.getItem('tarefas');
    console.log(` Tarefas : ${tarefasLocais}`);

    const listadeTarefas = JSON.parse(tarefasLocais);
    console.log(`Minha lista de tarefas: ${listadeTarefas}`);    

    for (let tarefa of listadeTarefas){
        criarTarefa(tarefa);
    }
}

adicionarTarefasSalvas();

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
