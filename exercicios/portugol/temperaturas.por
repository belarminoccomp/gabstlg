programa
{
    inclua biblioteca Matematica --> mat

    funcao inicio()
    {
        real dados[100]
        real soma = 0.0
        real media
        real soma_dif_quad = 0.0
        real variancia
        real desvio_padrao
        inteiro i

        // Lê as 100 temperaturas e acumula a soma.
        para (i = 0; i < 100; i++)
        {
            escreva("Digite a temperatura ", i + 1, ": ")
            leia(dados[i])
            soma = soma + dados[i]
        }
        media = soma / 100.0

        // Soma dos quadrados das diferenças em relação à média.
        para (i = 0; i < 100; i++)
        {
            soma_dif_quad = soma_dif_quad +
                (dados[i] - media) * (dados[i] - media)
        }

        // Variância amostral: divide por n - 1, ou seja, 99.
        variancia = soma_dif_quad / 99.0
        desvio_padrao = mat.raiz(variancia, 2)

        escreva("\nMédia: ", media)
        escreva("\nVariância amostral: ", variancia)
        escreva("\nDesvio-padrão amostral: ", desvio_padrao, "\n")
    }
}
