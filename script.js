//Récupération des éléments du DOM
const launchPlayerOne = document.getElementById('launch-player-one');
const endOfPlayerOne = document.getElementById('end-of-player-one');
const dicePlayerOne = document.getElementById('dice-player-one');
const launchPlayerTwo = document.getElementById('launch-player-two');
const endOfPlayerTwo = document.getElementById('end-of-player-two');
const dicePlayerTwo = document.getElementById('dice-player-two');
const scorePlayerOne = document.getElementById('score-player-one');
const scorePlayerTwo = document.getElementById('score-player-two');
const tempScore1 = document.getElementById('temp-score1');
const tempScore2 = document.getElementById('temp-score2');
const textResult = document.getElementById('text-result');
const newGame = document.getElementById('new-game');
let valueDice;
let score1 = 0;
let score2 = 0;
let temp = 0;
const limitScore = 100;

//Evenement boutton Lancer Player 1
launchPlayerOne.addEventListener('click', (e) => {
    valueDice = randomNumber(1, 6);
    changeDice(dicePlayerOne, tempScore1);
    disabledLaunch(valueDice, launchPlayerOne, launchPlayerTwo);
    addTempScore(valueDice);
}, 1000)
//Evenement boutton Lancer Player 2
launchPlayerTwo.addEventListener('click', (e) => {
    valueDice = randomNumber(1, 6)
    changeDice(dicePlayerTwo, tempScore2)
    disabledLaunch(valueDice, launchPlayerTwo, launchPlayerOne);
    addTempScore(valueDice);
}, 1000)

//Fonction générer un nombre aléatoir entre 1 et 6
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fonction qui change le dé
function changeDice (element, element2) {
    switch (valueDice) {
        case 1:
            element.innerHTML = "<img src='./Img/Dice1.png'>";
            element2.innerHTML = "Passe ton tour";
            break;
        case 2:
            element.innerHTML = "<img src='./Img/Dice2.png'>";
            element2.innerHTML = temp + valueDice;
            break;
        case 3:
            element.innerHTML = "<img src='./Img/Dice3.png'>";
            element2.innerHTML = temp + valueDice;
            break;
        case 4:
            element.innerHTML = "<img src='./Img/Dice4.png'>";
            element2.innerHTML = temp + valueDice;
            break;
        case 5:
            element.innerHTML = "<img src='./Img/Dice5.png'>";
            element2.innerHTML = temp + valueDice;
            break;
        case 6:
            element.innerHTML = "<img src='./Img/Dice6.png'>";
            element2.innerHTML = temp + valueDice;
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
    tempScore1.innerHTML = temp;
})
//Fonction fin du tour player 2
endOfPlayerTwo.addEventListener('click', (e) => {
    score2 += temp;
    launchPlayerTwo.disabled = true;
    launchPlayerOne.disabled = false;
    scorePlayerTwo.innerHTML = score2;
    temp = 0;
    changeTextResult();
    tempScore2.innerHTML = temp;
})

//Fonction qui change le texte du résultat
function changeTextResult() {
    if(score1 === 0 && score2 === 0) {
        textResult.innerHTML = "<p>Nouvelle Partie : Joueur 1 lance le dé !</p>";
     } else if(score1 === score2) {
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

//Fonction qui remet a zero les score et réactive les boutons
newGame.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    launchPlayerOne.disabled = false;
    launchPlayerTwo.disabled = false;
    scorePlayerOne.innerHTML = score1;
    scorePlayerTwo.innerHTML = score2;
    changeTextResult();
})
