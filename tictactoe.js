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


function checkGame() {
    for(let i = 0; i<cellElements.length; i++) {
        gameBoard[i] = cellElements[i].innerHTML
    winningConditions.forEach(condition => 
    {
        console.log("condition", condition);
        if (gameBoard[condition[0]] == xText && gameBoard[condition[1]] == xText && gameBoard[condition[2]] == xText) {
            winningMessage.innerHTML = "Dragon's Blood Is Victorious"
        }
        if (gameBoard[condition[0]] == oText && gameBoard[condition[1]] == oText && gameBoard[condition[2]] == oText) {
            winningMessage.innerHTML = "Wolf's Spine Is Victorious"
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
    var resetBoard = document.querySelector("#restartButton")
    resetBoard.addEventListener("click", restartButton)
}










document.addEventListener("DOMContentLoaded", (_event) => {
    bind_listeners();
});