/*
var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);




/*

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 
else if (randomNumber=='2') {
    computerMove = 'papier'
}
else if (randomNumber == '3') {
    computerMove = 'nożyce'
}

else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);


/*
var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} 
else if (playerInput == '2') {
    playerMove = 'papier'
}

else if (playerInput == '3') {
    playerMove = 'nożyce'
}


else {
  playerMove = 'kamień';
}
printMessage('Twój ruch: ' + playerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
/*
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } 
  
  else if (argMoveId == 2) {
    return 'papier'
  }

  else if (argMoveId == 3) {
    return 'nożyce'
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
/*
 function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } 
    
    else if (argPlayerMove =='nożyce' && argComputerMove =='papier') {
        printMessage('Wygrywasz')
    }

    else if (argPlayerMove == 'kamień' && argComputerMove =='nożyce') {
        printMessage('Wygrywasz')
    }

    else if (argPlayerMove =='kamień' && argComputerMove == 'kamień') {
        printMessage('Remis')
    }

    else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove=argButtonName
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

  

/**
 * Describe this function...
 */
/*
 var buttonRock, buttonPapper, buttonScissors;
 buttonRock = document.getElementById('button-rock');
 buttonPapper = document.getElementById('button-paper');
 buttonScissors = document.getElementById('button-scissors');

 function buttonClicked('kamień') {
  clearMessages();
  console.log(buttonRock + 'został kliknięty')
  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
 }

  function buttonClicked('papier') {
    clearMessages();
    buttonPapper.addEventListener('click',function(){buttonClicked('papier')})
    console.log(buttonPapper + 'został kliknięty')
    buttonPapper = document.getElementById('button-paper');
    buttonPapper.addEventListener('click', function(){ buttonClicked('papier'); });
  }

  function buttonClicked('nożyce') {
    clearMessages();
    buttonScissors.addEventListener('click',function(){buttonClicked('papier')})
    console.log(buttonScissors + 'został kliknięty')
    buttonScissors = document.getElementById('button-scissors');
    buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
  }

  /**
 * Describe this function...
 */
/*
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } 
    
    else if (argMoveId == 2) {
      return 'papier'
    }
  
    else if (argMoveId == 3) {
      return 'nożyce'
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  /**
   * Describe this function...
   */
  /*
   function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } 
      
      else if (argPlayerMove =='nożyce' && argComputerMove =='papier') {
          printMessage('Wygrywasz')
      }
  
      else if (argPlayerMove == 'kamień' && argComputerMove =='nożyce') {
          printMessage('Wygrywasz')
      }
  
      else if (argPlayerMove =='kamień' && argComputerMove == 'kamień') {
          printMessage('Remis')
      }
  
      else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
  
    playerMove=argButtonName
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
  console.log(argButtonName + ' został kliknięty');
  
  */


const game = ( ) {
    let buttons = document.querySelectorAll('btn');


    const startGame = () => {


}

}