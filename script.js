let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    alert("You are about to show off your talent!")
    let selectButton = document.querySelector("#select-button");

    selectButton.addEventListener("click", function () {
        let boardSize = getSize();
        createBoard(boardSize);
    })
});

function createBoard(size) {
    let board = document.getElementById("container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let index = 0; index < numDivs; index++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
};

function getSize() {
    let userInput = prompt("What will be the size of the board?", "Max: 100");
    let message = document.querySelector("#message");
    if (userInput == "") {
        message.innerHTML = "Please provide a number";
    }
    else if (userInput < 0 || userInput > 100) {
        message.innerHTML = "Provide a number between 1 & 100";
    }
    else {
        message.innerHTML = "Now you can draw!"
        return userInput;
    }
};

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = "black";
    }
};

function setColor(colorChoice) {
    color = colorChoice;
};

function resetBoard() {
    let resetDivs = document.querySelectorAll("div");
    resetDivs.forEach((div) => div.style.backgroundColor = "white");
}




