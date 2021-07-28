//Récupération des éléments du DOM
const launchPlayerOne = document.getElementById('launch-player-one');
const endOfPlayerOne = document.getElementById('end-of-player-one');
const dicePlayerOne = document.getElementById('dice-player-one');
const launchPlayerTwo = document.getElementById('launch-player-two');
const endOfPlayerTwo = document.getElementById('end-of-player-two');
const dicePlayerTwo = document.getElementById('dice-player-two');
const scorePlayerOne = document.getElementById('score-player-one');
const scorePlayerTwo = document.getElementById('score-player-two');
const textResult = document.getElementById('text-result');
let valueDice;
let score1 = 0;
let score2 = 0;
let temp = 0;
const limitScore = 100;

//Evenement boutton Lancer Player 1
launchPlayerOne.addEventListener('click', (e) => {
    valueDice = randomNumber(2, 6);
    changeDice(dicePlayerOne);
    disabledLaunch(valueDice, launchPlayerOne, launchPlayerTwo);
    addTempScore(valueDice);
})
//Evenement boutton Lancer Player 2
launchPlayerTwo.addEventListener('click', (e) => {
    valueDice = randomNumber(2, 6)
    changeDice(dicePlayerTwo)
    disabledLaunch(valueDice, launchPlayerTwo, launchPlayerOne);
    addTempScore(valueDice);
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

// Fonction qui désactive le dé si = 1 
function disabledLaunch (value, element, element2) {
    if(value === 1) {
        element.disabled = true;
        element2.disabled = false;
        temp = 0;
    } else {
        element.disabled = false;
        element2.disabled = true;
    }
}

//Fonction qui ajoute temporairement le score du joueur
function addTempScore (value){
    if(value !== 1) {
        temp += value;
    } else {
        temp = 0;
    }
    console.log(temp);
} 

//Fonction fin du tour player 1 
endOfPlayerOne.addEventListener('click', (e) => {
    score1 += temp;
    launchPlayerOne.disabled = true;
    launchPlayerTwo.disabled = false;
    scorePlayerOne.innerHTML = score1;
    temp = 0;
    changeTextResult();
    console.log("Score 1: " + score1)
})
//Fonction fin du tour player 2
endOfPlayerTwo.addEventListener('click', (e) => {
    score2 += temp;
    launchPlayerTwo.disabled = true;
    launchPlayerOne.disabled = false;
    scorePlayerTwo.innerHTML = score2;
    temp = 0;
    changeTextResult();
    console.log("score 2: " + score2)
})

//Fonction qui change le texte du résultat
function changeTextResult() {
    if(score1 === score2) {
        textResult.innerHTML = "<p>Les deux joueurs sont à égalité</p>";
    } else if(score1 >= limitScore) {
        textResult.innerHTML = "<p>Le joueur 1 a gagné la partie !</p>";
        launchPlayerOne.disabled = true;
        launchPlayerTwo.disabled = true;
    } else if(score2 >= limitScore) {
        textResult.innerHTML = "<p>Le joueur 2 a gagné la partie !</p>";
        launchPlayerOne.disabled = true;
        launchPlayerTwo.disabled = true;
    } else if(score1 > score2) {
        textResult.innerHTML = "<p>Le joueur 1 est en tête !</p>";
    } else if(score2 > score1) {
        textResult.innerHTML = "<p>Le joueur 2 est en tête !</p>";
    }
}

