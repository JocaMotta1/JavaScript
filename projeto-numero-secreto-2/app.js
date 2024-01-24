iniciarJogo();
verificarChute();

function verificarChute() {
    if (document.querySelector("input").value == numeroSecreto) {
        tentativas++;
        let stringTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        selecionarTag('p', "Parabéns! Você conseguiu acertar o número misterioso após " + tentativas + " " + stringTentativa + ".\n\nO número era o " + numeroSecreto + '.');
        document.querySelector("button#iniciar").removeAttribute("disabled");
    }
    else {
        if (document.querySelector("input").value > numeroSecreto) {
            tentativas++;
            selecionarTag('p', "O seu número é MAIOR do que o número misterioso. Tente novamente!\nTentativas: " + tentativas);
        }
        else if (document.querySelector("input").value != "" && document.querySelector("input").value < numeroSecreto) {
            tentativas++;
            selecionarTag('p', "O seu número é MENOR do que o número misterioso. Tente novamente!\nTentativas: " + tentativas);
        }
        document.querySelector("input").value = "";
    }
}

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
    tentativas = 0;
    exibirMensagem();
    document.querySelector("input").value = "";
    document.querySelector("button#iniciar").setAttribute("disabled", true);
}

function selecionarTag (tag, texto) {
    let field = document.querySelector(tag);
    field.innerHTML = texto;
}

function exibirMensagem() {
    selecionarTag('h1', "Você consegue adivinhar o número secreto?");
    selecionarTag('p', "Escolha um número entre 1 e 100. (apenas números inteiros)\nTentativas: " + tentativas);
}