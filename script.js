//Récupération des éléments du DOM
const launchPlayerOne = document.getElementById('launch-player-one');
const endOfPlayerOne = document.getElementById('end-of-player-one');
const dicePlayerOne = document.getElementById('dice-player-one');
const launchPlayerTwo = document.getElementById('launch-player-two');
const endOfPlayerTwo = document.getElementById('end-of-player-two');
const dicePlayerTwo = document.getElementById('dice-player-two');
let valueDice;


//Evenement boutton Lancer Player 1
launchPlayerOne.addEventListener('click', (e) => {
    valueDice = randomNumber(1, 6)
    return changeDice(dicePlayerOne)
})
//Evenement boutton Lancer Player 2
launchPlayerTwo.addEventListener('click', (e) => {
    valueDice = randomNumber(1, 6)
    return changeDice(dicePlayerTwo)
})

//Fonction générer un nombre aléatoir entre 1 et 6
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fonction qui change le dé
function changeDice (element) {
    switch (valueDice) {
        case 1:
            element.innerHTML = "<img src='./Img/Dice1.png'>";
            break;
        case 2:
            element.innerHTML = "<img src='./Img/Dice2.png'>";
            break;
        case 3:
            element.innerHTML = "<img src='./Img/Dice3.png'>";
            break;
        case 4:
            element.innerHTML = "<img src='./Img/Dice4.png'>";
            break;
        case 5:
            element.innerHTML = "<img src='./Img/Dice5.png'>";
            break;
        case 6:
            element.innerHTML = "<img src='./Img/Dice6.png'>";
            break;
    }
}
