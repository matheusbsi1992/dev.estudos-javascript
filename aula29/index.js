
/*
Uso de switch case, mas nao cheguei a utilizar este devido comando ou sintax previsto.
*/
const data = new Date();

console.log(data, Date.now());

//De forma correlacionada ao dia correspondente
// 0 - Domingo e 6 - Sábado
const diaDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

console.log(diaDaSemana);

const diaSemana = data.getDay()

const valorUnico = `${diaDaSemana[diaSemana]}, ${data.toLocaleDateString('pt-BR')} ${data.toLocaleTimeString('pt-BR')}`
console.log(valorUnico)

console.log(data.getUTCMonth() + 1)


// 1. Create the base date
let date = new Date();

// 2. Add one month
date.setMonth(date.getMonth());

// 3. Output the result
console.log(date.toISOString().split('T')[1]); // Output: 2026-04-15

// Source - https://stackoverflow.com/a/41592547
// Posted by Medet Tleugabyluly
// Retrieved 2026-06-17, License - CC BY-SA 3.0

Date.prototype.getMonthText = function () {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[this.getMonth()];
}

var now = new Date();
var month = now.getMonthText();
console.log(month);

// Source - https://stackoverflow.com/a/41603310
// Posted by RobG
// Retrieved 2026-06-17, License - CC BY-SA 3.0

Date.prototype.getMonthName = function (lang) {
  // Default language is English
  lang = lang || 'pt-BR';
  return this.toLocaleString(lang, { month: 'long' });
}

console.log(new Date().getMonthName())// portugues Brasil

let newDate = new Date();

console.log((date.toLocaleString('pt-br', {
  month: 'long',
})));

let meuValorMes = '';


switch (diaDaSemana) {
  case 0:
    meuValorMes = 'Domingo';
    return meuValorMes;
    break;
  case 1:
    meuValorMes = 'Segunda';
    return meuValorMes;
    break;

}