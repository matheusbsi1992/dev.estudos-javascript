/*
Uso de let e var entre funcao e/ou escopo de funcao, declaracao global e contida
dentro de uma condicao existente. 
{...}
*/

//let tem escopo de bloco {...}
//var so tem escopo da funcao

// let nome = 'Maria';
// var nome2= 'Tereza';

// console.log(`Iniciais: ${nome},${nome2}`);

// let verdadeiro = true;


// if(verdadeiro){

//     let nome = 'Jose';
//     var nome2= 'Ana';

//     if(verdadeiro){
//         let nome = 'Ronaldo';
//         var nome2 = 'Luiza'
//         //console.log(nome,nome2);
//     }

// }

// console.log(nome,nome2);

var nome = 'Mira'
let verdadeira = true;
function falarOI() {
    var nome='Ana';
    let casa= 'Amarela'
    if (verdadeira) {
        var ini= 'Fuica'
        //let ini= 'Fuica'
        console.log(nome,ini);
    }
    console.log(nome,casa, ini);
}

falarOI();