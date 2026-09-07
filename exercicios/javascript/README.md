# Exercícios JavaScript

Esta pasta reúne exercícios recentes de lógica em JavaScript feitos para rodar no Node.js.

## Arquivos

- `aa.js`: jogo de adivinhação com até 5 tentativas.
- `bb.js`: verificação de quadrado mágico 3x3.
- `cc.js`: soma, quantidade, média, maior e menor até digitar zero.
- `dd.js`: soma de números positivos usando `do...while`.
- `de.js`: soma de números positivos usando `while`.

## Como executar

Instale a dependência usada nos prompts:

```bash
npm install prompt-sync
```

Depois rode um arquivo por vez:

```bash
node aa.js
```

As leituras numéricas rejeitam entradas vazias, texto e valores infinitos; aceitam vírgula ou ponto decimal. No jogo de adivinhação, valores fora de 1 a 20 não consomem tentativas. `entrada.js` concentra essa leitura.

O exercício `bb.js` compara as somas de linhas, colunas e diagonais. Ele não verifica a condição adicional de números distintos de 1 a 9 de um quadrado mágico normal.
