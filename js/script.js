
const game = ( ) => {
    let buttons = document.querySelectorAll('btn');
    let winner = document.getElementById('winner');
    let resultUser = document.getElementById('result-user');
    let resultComputer = document.getElementById('result-computer');
    let sectionResult = document.getElementById('result');
    let computerChoosed = '';
    let userChoosed = '';
    let time = 3;

    const startGame = () => {
        buttons.forEach(user => {
            user.addEventListener('click', () => {
                prepareToStartGame(user);
                let timeInterval = setInterval(() => {
                    if(time === 0) {
                        clearInterval(timeInterval);
                        let computer = Math.floor(Math.random() *3);
                        displayUserAndComputer(buttons.id, allChoose[computer].id );
                        sectionResult.classList.add('result');
                    } else {
                        winner.textContent = time;
                        time --;
                    }
                }, 800)
            })
        })
    }

    displayUserAndComputer = (user, computer) => {
        resultUser.classList.remove("btn-player" + userChoosed);
        resultComputer.classList.remove("btn-player" + computerChoosed);
        resultUser.classList.add("btn-player" + user);
        resultComputer.classList.add("btn-player" + computer);
        userChoosed = user;
        computerChoosed = computer;
    }


    prepareToStartGame = (user) => {
        buttons.forEach(val => val.classList.remove('green'));
        time = 3;
        winner.textContent = time;

        user.classList.add('green');
        sectionResult.classList.remove('result');
    }

    startGame()
}
game()