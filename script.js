// seleciona o elemento
const resultado = document.getElementById("resultado");

// Variáveis para armazenar valores 
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";

// Função para atualizar o display
function atualizarDisplay(valor) {
    resultado.textContent = valor;
}

// Função para  cliques nos botões
document.querySelectorAll("button").forEach((botao) => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        if (!isNaN(valor) || valor === ".") {
            // Números e ponto decimal
            operacaoAtual += valor;
            atualizarDisplay(operacaoAtual);
        } else if (valor === "C") {
            // Limpar tudo
            operacaoAtual = "";
            valorAnterior = "";
            operador = null;
            atualizarDisplay("");
        } else if (valor === "<") {
            // Apagar o último caractere
            operacaoAtual = operacaoAtual.slice(0, -1);
            atualizarDisplay(operacaoAtual);
        } else if (valor === "=") {
            // Calcular o resultado
            if (valorAnterior && operador && operacaoAtual) {
                const resultadoFinal = eval(`${valorAnterior} ${operador} ${operacaoAtual}`);
                atualizarDisplay(resultadoFinal);
                operacaoAtual = resultadoFinal.toString();
                valorAnterior = "";
                operador = null;
            }
        } else {
            // Operadores 
            if (operacaoAtual) {
                valorAnterior = operacaoAtual;
                operacaoAtual = "";
                operador = valor === "X" ? "*" : valor;
            }
        }
    });
});