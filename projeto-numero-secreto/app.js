alert("Tente adivinhar qual o número, de 1 até 100, que foi gerado aleatoriamente. Boa sorte!");

let numeroSecreto = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
let tentativas = 0;
let chute = prompt("Qual o número misterioso?\nTentativas: " + tentativas);
tentativas++;

while (chute != numeroSecreto) {
    if (chute > numeroSecreto) {
        alert("O seu número é MAIOR do que o número misterioso. Tente novamente!");
    }
    else {
        alert("O seu número é MENOR do que o número misterioso. Tente novamente!");
    }
    
    chute = prompt("Qual o número misterioso? \nTentativas: " + tentativas);
    tentativas++;
}

alert("Parabéns! Você conseguiu acertar o número misterioso após " + tentativas + " tentativas.\n\nO número misterioso era o " + numeroSecreto + '.');