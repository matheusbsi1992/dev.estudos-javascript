//--- Async principio permissionivel, que permite que uma promisse seja finalizada
//--- Com respectivos estados
//--- Pendente (Esta sendo executada, mas nao retorna o valor correspondente da promisse)
//--- Fullfilled (Resolvida)
//--- Reject (Rejeitada)

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof msg !== 'string') {
                reject(false);
                return;
            }

            //console.log(msg)
            resolve(msg + ' Passei na promise'.toUpperCase());
            return;
        }, tempo)
    })
}


// esperaAi('Frase 1', rand(1, 3))
//     .then(resolve => {
//         console.log(resolve);
//         return esperaAi('Frase 2', rand(1, 3));
//     })
//     .then(resolve => {
//         console.log(resolve);
//         return esperaAi('Frase 3', rand(1, 3));
//     })
//     .then(resolve => {
//         console.log(resolve)
//     })
//     .catch(e => {
//         console.log('Error', e);
//     })


async function promissorRespectivo() {
    try {

        const frase1 = await esperaAi('Frase 1 -->', rand(1, 3));
        console.log(frase1);

        const frase2 = esperaAi('Frase 2 -->', 1000);
        console.log(frase2);

        setTimeout(function () {
            console.log('Esta promise estava pendente --->', frase2)
        }, 1100)

        const frase3 = await esperaAi('Frase 3 -->', rand(1, 3));
        console.log(frase3);


    } catch (error) {
        console.log(error);
    }

}

promissorRespectivo();