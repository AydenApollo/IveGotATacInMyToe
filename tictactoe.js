const theContainer = document.getElementById("theContainer");
const cellElements = document.querySelectorAll(".cell");
let spaces = ["", "", "", "", "", "", "", "", ""]
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

function forClicked (e) {
    const cell = e.target
    spaces
    const currentPlayer = xPlayer ? xText : oText 
        placeMark(cell, currentPlayer);
        playerWin(currentPlayer);
        changeSides();
    
}

function placeMark(cell, currentPlayer) {
    cell.innerHTML = `${currentPlayer}`
}
function changeSides() {
    xPlayer = !xPlayer
}
function playerWin(currentPlayer) {
    if(theContainer && currentPlayer === winningConditions) {
        winningMessage.innerText = `${currentPlayer} is Victorious!`
    }
}








function bind_listeners(){
    var form = document.querySelector("form");
    form.addEventListener("submit", cleanse_the_board)
}










document.addEventListener("DOMContentLoaded", (_event) => {
    bind_listeners();
});