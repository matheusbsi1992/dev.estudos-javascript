const horasCasa = document.querySelector('.horas');
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let totalSegundos = 0;

let parar = null;

function minhasHoras() {
    let data = new Date();

    const minhaData = data.toLocaleDateString('pt-BR', {
        hour12: false,
        timeZone: 'America/Maceio'
    });

    const minhaHora = data.toLocaleTimeString('pt-BR', {
        hour12: false,
        
    });

    return horasCasa.textContent = `${minhaData} - ${minhaHora}`;
}

function iniciarTemporizador() {

    setInterval(function () {
        minhasHoras();
    }, 1000);

}

function formatarHora(horas, minutos, segundos) {
    if (totalSegundos === 0) {
        return '00:00:00';
    }
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

const tempo = function horaExistente() {

    relogio.textContent = '00:00:00';

    horas = Math.floor(totalSegundos / 3600);
    minutos = Math.floor((totalSegundos % 3600) / 60);
    segundos = totalSegundos % 60;

    totalSegundos++;

    return relogio.textContent = formatarHora(horas, minutos, segundos);

}

function iniciarContagem() {
    iniciar.addEventListener('click', function () {
        alert('Inicializando a minha contagem !!!');

        parar = setInterval(function () {
            console.log(tempo());
        }, 1000);
    }, { once: false });
};

function pausarContagem() {
    pausar.addEventListener('click', function () {

        setTimeout(function () {
            clearInterval(parar);
            console.log('Pausando a contagem !!!');
        }, 1000);
    }, { once: false });
}

function zerarContagem() {
    zerar.addEventListener('click', function () {

        setTimeout(function () {

            relogio.textContent = '00:00:00';

            totalSegundos = 0;

            formatarHora(0, 0, 0);

            clearInterval(parar);

            //pararTemporariamente();

            console.log('Zerando a contagem !!!');

        }, 1000);

    }, { once: false });
}

iniciarContagem();
pausarContagem();
zerarContagem();
iniciarTemporizador();