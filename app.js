alert('Welcome to the game from secret number');

//PARA CRIAÇÕES DE VARIÁVEIS
let secretNumber = 10;

//PARA ACIONAR UM POP-UP COM CAIXA DE MENSAGEM E GUARDAR O VALOR EM UMA VARIAVEL
let choose;

//CONTADOR DE TENTATIVAS
let attempts = 1; 


while (choose != secretNumber) {
    choose = prompt ('Choose a number between 1 and 10');

    if (choose == secretNumber){
        console.log(`You guessed the secret number ${secretNumber} with ${attempts} attempts`);
        /*O USO DA CRASE (TEMPLATE STRINGS) ONDE É POSSÍVEL INSERIR VARIÁVEIS
          DENTRO DE UMA TEMPLATE STRING SEM PRECISAR CONCATENAR MANUALMENTE*/
    }
    
    else if (choose > secretNumber ) {
        alert(`The secret number is smaller than ${choose}`);
    }
    
    else {
        alert(`The secret number is greater than ${choose}`);
    }

    attempts++;

}





