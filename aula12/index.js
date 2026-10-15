let letraA = 'A'; // B
let letraB = 'B'; //C 
let letraC = 'C'; //A

/*[letraA, letraB, letraC] = [letraB, letraC, letraA];

console.log(letraA);
console.log(letraB);
console.log(letraC);*/

console.log(letraA);
console.log(letraB);
console.log(letraC);

let letraAux = letraA;

letraA = letraB;
letraB = letraC;
letraC = letraAux;

console.log(letraA);
console.log(letraB);
console.log(letraC);

