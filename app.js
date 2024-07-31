alert('Welcome to the game from secret number');

//GERADOR DE NUMEROS ALEATORIOS DO TIPO INTEIRO
let secretNumber = parseInt(Math.random() * 100 + 1);

//PARA ACIONAR UM POP-UP COM CAIXA DE MENSAGEM E GUARDAR O VALOR EM UMA VARIAVEL
let choose;

//CONTADOR DE TENTATIVAS
let attempts = 1; 

while (choose != secretNumber) {
    choose = prompt ('Choose a number between 1 and 100');

    if (choose == secretNumber){
        break;
    }
    
    else if (choose > secretNumber ) {
        alert(`The secret number is smaller than ${choose}`);
    }
    
    else {
        alert(`The secret number is greater than ${choose}`);
    }

    attempts++;
}

//OPERADOR TERNÁRIO
let chooseWord = attempts > 1 ? "attempts" : "attempt";
console.log(alert(`You guessed the secret number ${secretNumber} with ${attempts} ${chooseWord}`));