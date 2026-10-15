/*
Geracao setInterval
*/

function horaExistente() {

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


//console.log(horaExistente());

const timer = setInterval(function () {
    console.log(horaExistente())
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 6000);

setTimeout(function () {
    console.log('Tudo bem ?!');
}, 6000)