let end, start;

start = new Date();
for (let i = 0; i < 10000; i++) {

    Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);


console.log(start.toString());

const valorDataUnico = new Date();

console.log(valorDataUnico.getDate())

console.log(valorDataUnico.getFullYear())


//Mes comeca de zero
console.log("Mes do ano: ", valorDataUnico.getMonth() + 1);

//Dia da semana comeca com Zero
console.log("Dia da Semana: ", valorDataUnico.getDay()); // (0 - Domingo e 6 - Sábado)


console.log(valorDataUnico.toLocaleDateString('pt-BR'));

function formataData(data) {

    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth()+1);
    const ano = zeroEsquerda(data.getFullYear());

    const horas = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`
}

// se o numero vier zerado
function zeroEsquerda(num){
    return num >= 10  ? num : `0${num}`;
}


let valorInicial = new Date();

const minhaData = new Date();

console.log(formataData(minhaData));

let novaData = `${minhaData.toLocaleDateString('pt-BR')} ${minhaData.toLocaleTimeString('pt-BR')}`;
console.log(novaData)

