// Soma de positivos com while.
 const { lerNumero } = require('./entrada'); 
let num1 = lerNumero("Digite um número positivo (<=0 para parar) [while]:");
let soma1 = 0;
while (num1 > 0) {
    soma1 += num1;
    num1 = lerNumero("Próximo número:");
}
console.log("Soma (while): " + soma1);
