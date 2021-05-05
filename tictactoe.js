const theContainer = document.getElementById("theContainer");
const cellElements = Array.from(document.querySelectorAll(".cell"));
const gameBoard = {}
const oText = "O";
const xText = "X"
let xPlayer = xText
let gameScore = 0; 
const winningMessage = document.getElementById("winning-message")
const restartButton = document.getElementById("restartButton");
const players = document.getElementById("players");
const DragonFang = document.getElementById("DragonFang")
const WolfSong = document.getElementById("WolfSong")
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const startGame = () => {
    let xscore = localStorage.getItem("playerXScore")
    let oscore = localStorage.getItem("playerOScore")
    if (xscore == null) {
        localStorage.setItem("playerXScore", 0)
    }
    if (oscore == null) {
        localStorage.setItem("playerOScore", 0)
    }
    DragonFang.innerText = "Dragonfang: " + localStorage.getItem("playerXScore")
    WolfSong.innerHTML = "Wolfsong: " + localStorage.getItem("playerOScore")

}

startGame();


function checkGame() {
    let currentWinner = null
    for(let i = 0; i<cellElements.length; i++) {
        gameBoard[i] = cellElements[i].innerHTML
    winningConditions.forEach(condition => 
    {
        if (gameBoard[condition[0]] == xText && gameBoard[condition[1]] == xText && gameBoard[condition[2]] == xText) {
            winningMessage.innerHTML = "Dragonfang Is Victorious"
            var dragon = document.querySelector("#dragon");
            dragon.play();
            currentWinner = "X"
        }
        if (gameBoard[condition[0]] == oText && gameBoard[condition[1]] == oText && gameBoard[condition[2]] == oText) {
            winningMessage.innerHTML = "Wolfsong Is Victorious"
            var wolf = document.querySelector("#wolf");
            wolf.play();
            img = document.querySelector("#wolfy");
            img.style.display = 'block';
            currentWinner = "O"
        }
    })
    if (currentWinner == "X") {
        localStorage.setItem("playerXScore", parseInt(localStorage.getItem("playerXScore")) + 1)
    } else if (currentWinner == "O") {
        localStorage.setItem("playerOScore", parseInt(localStorage.getItem("playerOScore")) + 1)
    }
}}


function isDraw() {
    for(let i = 0; i<cellElements.length; i++) {
        gameBoard[i] = cellElements[i].innerHTML
    winningConditions.forEach(condition => 
    {
        if (gameBoard[condition[0]] !== xText && gameBoard[condition[1]] !== xText && gameBoard[condition[2]] !== xText) {
            winningMessage.innerHTML = "Back Into The Fray"
        }
        if (gameBoard[condition[0]] !== xText && gameBoard[condition[1]] !== xText && gameBoard[condition[2]] !== xText) {
            winningMessage.innerHTML = "Back Into The Fray"
        }
    })
    
}}

        
    



cellElements.forEach(cell => {
     cell.addEventListener("click", forClicked, {once : true})
})


function forClicked (e) {
    const cell = e.target
    const currentPlayer = xPlayer ? xText : oText
    placeMark(cell, currentPlayer);
    if (checkGame(false)) {
        isDraw(true);
    }
    changeSides();
    checkGame();
}

function placeMark(cell, currentPlayer) {
    cell.innerHTML = `${currentPlayer}`
}
function changeSides() {
    xPlayer = !xPlayer
}



const resetBoard = () => {
    cellElements.forEach((cell) => {
        cell = null
    })
}


restartButton.addEventListener("click", resetBoard);
resetBoard();





