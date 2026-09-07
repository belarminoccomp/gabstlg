const { lerNumero } = require('./entrada'); 
// Soma de positivos com do...while.
let soma2 = 0;
let num2;                  // declarada FORA do bloco → acessível no while(...)
do {
    num2 = lerNumero("Digite um número positivo (<=0 para parar):");
    if (num2 > 0) soma2 += num2;
} while (num2 > 0);
console.log("Soma (do...while): " + soma2);
