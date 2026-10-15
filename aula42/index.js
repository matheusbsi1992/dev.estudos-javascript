function ePaisagem(largura, altura) {

    if ((largura == null || largura <= 0 || largura == false)) {
        return 'Valor Inexistente da largura'
    }
    if ((altura == null || altura <= 0 || altura == false)) {
        return 'Valor Inexistente da altura'
    }
    return largura > altura ? true : false;

}

const largura = 40;
const altura = 40;

console.log(ePaisagem(Number(largura), Number(altura)));

const ePaisagemArrow = (altura, largura) => (altura > largura) ? true : false;

console.log(ePaisagemArrow(2400, 5000));



