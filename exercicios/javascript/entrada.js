// Entrada numérica compartilhada pelos exercícios de repetição.
const prompt = require('prompt-sync')();

function lerNumero(mensagem) {
    while (true) {
        const texto = prompt(mensagem).trim();
        const numero = Number(texto.replace(',', '.'));
        if (texto !== '' && Number.isFinite(numero)) return numero;
        console.log('Entrada inválida. Digite um número finito.');
    }
}
module.exports = { lerNumero };
