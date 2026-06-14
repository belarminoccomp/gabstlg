// ── VERSÃO do...while ───────────────────────────
 const prompt = require('prompt-sync')(); 
// ── VERSÃO do...while ────────────────────────────
let soma2 = 0;
let num2;                  // declarada FORA do bloco → acessível no while(...)
do {
    num2 = Number(prompt("Digite um número positivo (<=0 para parar):"));
    if (num2 > 0) soma2 += num2;
} while (num2 > 0);
console.log("Soma (do...while): " + soma2);