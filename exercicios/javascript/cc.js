const { lerNumero } = require('./entrada'); 
 
let num = lerNumero("Digite um número (0 para encerrar):");

if (num === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let soma = 0, qtd = 0, maior = num, menor = num;
    while (num !== 0) {
        soma += num;
        qtd++;
        if (num > maior) maior = num;
        if (num < menor) menor = num;
        num = lerNumero("Digite um número (0 para encerrar):");
    }
    console.log("Soma:   " + soma.toFixed(2));
    console.log("Qtd:    " + qtd);
    console.log("Média:  " + (soma / qtd).toFixed(2));
    console.log("Maior:  " + maior.toFixed(2));
    console.log("Menor:  " + menor.toFixed(2));
}
