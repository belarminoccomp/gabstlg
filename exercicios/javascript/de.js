 // ── VERSÃO while ────────────────────────────────
 const prompt = require('prompt-sync')(); 
let num1 = Number(prompt("Digite um número positivo (<=0 para parar) [while]:"));
let soma1 = 0;
while (num1 > 0) {
    soma1 += num1;
    num1 = Number(prompt("Próximo número:"));
}
console.log("Soma (while): " + soma1);