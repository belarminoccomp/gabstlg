const prompt = require('prompt-sync')();

let secreto = Math.floor(Math.random() * 20) + 1;
let tentativas = 0, acertou = false, palpite;

do {
    palpite = Number(prompt("Tentativa " + (tentativas + 1) + " — Adivinhe (1-20):"));
    tentativas++;
    if (palpite === secreto) {
        acertou = true;
    } else if (palpite < secreto) {
        console.log("Maior que " + palpite + "!");
    } else {
        console.log("Menor que " + palpite + "!");
    }
} while (!acertou && tentativas < 5);

if (acertou) console.log("Você acertou em " + tentativas + " tentativa(s)!");
else         console.log("Tentativas esgotadas! O número era " + secreto + ".");