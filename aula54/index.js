//Funcoes de callback


function inteiroAleatorio(min = 1000, max = 3000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function f1(callback) {

    setTimeout(() => {
        console.log('F1');
        if (callback)
            callback();
    }, inteiroAleatorio());

}

function f2(callback) {

    setTimeout(() => {
        console.log('F2');
        if (callback)
            callback();
    }, inteiroAleatorio());

}

function f3(callback) {

    setTimeout(() => {
        console.log('F3');
        if (callback)
            callback();
    }, inteiroAleatorio());
}

//--- O aninhamento das funcoes com o callback. Ira determinar a funcao a ser inicializada
//--- f1,f2 e f3
// Este e o aninhamento com funcoes anonimas
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Boa noite !!!');
//         });
//     });
// });

//-- Ou forma designada

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('OLA');
}