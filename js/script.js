
const game = ( ) => {
    let allChoose = document.querySelectorAll('.btn');
    let winner = document.getElementById('winner');
    let resultUser = document.getElementById('result-user');
    let resultComputer = document.getElementById('result-computer');
    let sectionResult = document.getElementById('result');
    let scoreUserDisplay = document.getElementById('scoreUser');
    let scoreComputerDisplay = document.getElementById('scoreComputer');
    let scoreUser = 0;
    let scoreComputer = 0;
    let computerChoosed = '';
    let userChoosed = '';
    let time = 3;

    const startGame = () => {
        allChoose.forEach(user => {
            user.addEventListener('click', () => {
                prepareToStartGame(user);
                let timeInterval = setInterval(() => {
                    if(time === 0) {
                        clearInterval(timeInterval);
                        let computer = Math.floor(Math.random() *3);
                        displayUserAndComputer(buttons.id, allChoose[computer].id );
                        checkWin(user.id, allChoose[computer].id);
                        sectionResult.classList.add('result');
                    } else {
                        winner.textContent = time;
                        time --;
                    }
                }, 200)
            })
        })
    }

    displayUserAndComputer = (user, computer) => {
        resultUser.classList.remove("btn-user" + userChoosed);
        resultComputer.classList.remove("btn-user" + computerChoosed);
        resultUser.classList.add("btn-user" + user);
        resultComputer.classList.add("btn-user" + computer);
        userChoosed = user;
        computerChoosed = computer;
    }


    prepareToStartGame = (user) => {
        allChoose.forEach(val => val.classList.remove('green'));
        time = 3;
        winner.textContent = time;

        user.classList.add('green');
        sectionResult.classList.remove('result');
    }

    checkWin = (user,computer) => {
        if (user === computer) {
            winner.textContent = "REMIS";
            return;
        }
        if (user === "rock") {
            if (computer === "scissors"){
            winner.textContent = "WYGRAŁAEŚ";
            scoreUser++;
            scoreUserDisplay.textContent = scoreUser;
            return;
        } else {
            winner.textContent = "PRZEGRAŁEŚ";
            scoreComputer++;
            scoreComputerDisplay.textContent = scoreComputer;
            return;
        }
        }
        if (user === "paper") {
            if(computer === "scissors") {
                winner.textContent = "PRZEGRAŁEŚ";
                scoreComputer++;
                scoreComputerDisplay.textContent = scoreComputer;
                return;
            } else {
                winner.textContent = "WYGRAŁAEŚ";
                scoreUser++;
                scoreUserDisplay.textContent = scoreUser;
                return;
            }
        }
        if (user === "scissors") {
            if(computer === "rock") {
                winner.textContent = "PRZEGRAŁEŚ";
                scoreComputer++;
                scoreComputerDisplay.textContent = scoreComputer;
                return;
            } else {
                winner.textContent = "WYGRAŁEŚ";
                scoreUser++;
                scoreUserDisplay.textContent = scoreUser;
                return;
            }
        }
      
    }
    startGame()
}
game()  