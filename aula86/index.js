//-- Promise
//-- Processos assincronos que se parecem com um sicronismo.
//-- Em vez de utilizar callback a relacao de promise permite posteriormente
//-- uma relacao de "callback", para o devidao assincronismo

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
/*Processo de exemplo com callback respectivo para promisse*/
/**function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb)
            cb();
    }, tempo)
}

esperaAi('Frase 1', rand(1, 3), function () {
    esperaAi('Frase 2', rand(1, 3), function () {
        esperaAi('Frase 3', rand(1, 3));
    });
});**/
//--Processo finaliza aqui

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('Erro inexistente'));
            }
            //console.log(msg)
            resolve(msg);
        }, tempo)
    })
}

esperaAi('Conexao com a BD', rand(1, 3))
    .then(resposta => {
        // Frase 1
        console.log(resposta)
        return esperaAi('Buscando dados da base', rand(1, 3));
    }).then(resposta => {
        // Frase 2
        console.log(resposta)
        return esperaAi(2222, rand(1, 3))
        //return esperaAi('Tratando os dados da base', rand(1, 3));
    }).then(resposta => {
        // Frase 3
        console.log(resposta)
    }).then(() => {
        console.log('Exibindo os dados na tela');
    })
    .catch(e => {
        console.log('Error de valor inexistente --->>', e)
    });

console.log('Isto sera exibido antes de quaisquer promise');
