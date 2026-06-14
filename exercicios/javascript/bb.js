const prompt = require('prompt-sync')();

let a0 = Number(prompt("Linha 1, Col 1: ")), a1 = Number(prompt("Linha 1, Col 2: ")), a2 = Number(prompt("Linha 1, Col 3: "));
let a3 = Number(prompt("Linha 2, Col 1: ")), a4 = Number(prompt("Linha 2, Col 2: ")), a5 = Number(prompt("Linha 2, Col 3: "));
let a6 = Number(prompt("Linha 3, Col 1: ")), a7 = Number(prompt("Linha 3, Col 2: ")), a8 = Number(prompt("Linha 3, Col 3: "));

let L1 = a0+a1+a2, L2 = a3+a4+a5, L3 = a6+a7+a8;
let C1 = a0+a3+a6, C2 = a1+a4+a7, C3 = a2+a5+a8;
let D1 = a0+a4+a8, D2 = a2+a4+a6;

console.log("Linha 1: " + a0+" + "+a1+" + "+a2+" = "+L1);
console.log("Linha 2: " + a3+" + "+a4+" + "+a5+" = "+L2);
console.log("Linha 3: " + a6+" + "+a7+" + "+a8+" = "+L3);
console.log("Coluna 1: " + a0+" + "+a3+" + "+a6+" = "+C1);
console.log("Coluna 2: " + a1+" + "+a4+" + "+a7+" = "+C2);
console.log("Coluna 3: " + a2+" + "+a5+" + "+a8+" = "+C3);
console.log("Diagonal principal: " + a0+" + "+a4+" + "+a8+" = "+D1);
console.log("Diagonal secundária: " + a2+" + "+a4+" + "+a6+" = "+D2);

if (L1===L2 && L2===L3 && L3===C1 && C1===C2 && C2===C3 && C3===D1 && D1===D2)
    console.log("É um quadrado mágico!");
else
    console.log("Não é um quadrado mágico.");