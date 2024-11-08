alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto o chute não for igual ao número secreto, vai repetindo
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
// se chutar for igual ao número secreto
    if (chute == numeroSecreto ) {
    break;
    } else {
// se chutar for maior que o número secreto
        if (chute > numeroSecreto ) {
        alert(`o número secreto é menor que ${chute}`);
        } else {
// se chutar for menor que o número secreto
            alert(`o número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
} */

