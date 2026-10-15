/*
Retornar hora prevista
* */

function horaRetornadaPrevista(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância do tipo Date");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        // hour12: false
    });
}

try {

    const hora = horaRetornadaPrevista('01');
    console.log(hora);

} catch (error) {
    console.log('Tipo inexistente de data')
}