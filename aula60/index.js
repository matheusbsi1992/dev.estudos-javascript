// Function recursiva
//Este tipo de funcao respectiva a ela mesma:
// --> Com a propriedade de chamar a si mesma
// --> Com a analise lexica
// --> Com a analise de escopo


function recursiva(fat){
    return fat === 1 ? 1 : fat * recursiva(fat - 1);
}

console.log(recursiva(8));