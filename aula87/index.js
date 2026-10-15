
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

        if (typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {

            //console.log(msg)
            resolve(msg + ' Passei na promise'.toUpperCase());
        }, tempo)
    })
}


const minhaPromise = [//'Primeiro valor',
    esperaAi('Frase 1 -> Promise Race', rand(1, 5)),
    esperaAi('Frase 2 -> Promise Race', rand(1, 5)),
    esperaAi('Frase 3 -> Promise Race', rand(1, 5)),
    //'Frase 4',
    //100,
    //esperaAi(15, 5),
    // 'Outro valor existente'
]
// Promise.all -> Resolva todas as promises
// Promise.race -> Entregue a primeira promise que estiver resolvida primeiro
Promise.race(minhaPromise)
    .then(values => {
        console.log(values)
    }).catch(e => {
        console.log(`Error--> O valor correspondente deveria ser do tipo Texto (string)`.toUpperCase(), e)
    });



// Promise.resolve 

function baixaPagina() {
    const emCache = false;
    if (emCache) {
        return Promise.reject('Pagina resolvida -> Promise')
    } else {
        esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(resolvido => {
        console.log(resolvido)
    })
    .catch(e => {
        console.log(e);
    })

// Promise.reject