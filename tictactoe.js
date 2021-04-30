const theContainer = document.getElementById("theContainer");
const cellElements = document.querySelectorAll(".cell");
const gameBoard = {}
const oText = "O";
const xText = "X"
let xPlayer = xText
const winningMessage = document.getElementById("winning-message")
const restartButton = document.getElementById("restartButton");
const players = document.getElementById("players");
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



cellElements.forEach(cell => {
    cell.addEventListener("click", forClicked, {once : true})
})
function checkGame() {
    for(let i = 0; i<cellElements.length; i++) {
        //console.log(cellElements[i])
        //console.log(cellElements[i].innerHTML)
        gameBoard[i] = cellElements[i].innerHTML
    }
    console.log(gameBoard);
    winningConditions.forEach(condition => {
        console.log("condition", condition);
        if (gameBoard[condition[0]] == xText && gameBoard[condition[1]] == xText && gameBoard[condition[2]] == xText) {
            alert("X is the winner")
        }
        if (gameBoard[condition[0]] == oText && gameBoard[condition[1]] == oText && gameBoard[condition[2]] == oText) {
            alert("O is the winner")
        }
}

function forClicked (e) {
    const cell = e.target
    const currentPlayer = xPlayer ? xText : oText 
    placeMark(cell, currentPlayer);
    changeSides();
    checkGame();
}

function placeMark(cell, currentPlayer) {
    cell.innerHTML = `${currentPlayer}`
}
function changeSides() {
    xPlayer = !xPlayer
}









function bind_listeners(){
    var form = document.querySelector("form");
    form.addEventListener("submit", cleanse_the_board)
}










document.addEventListener("DOMContentLoaded", (_event) => {
    bind_listeners();
});