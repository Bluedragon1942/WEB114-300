// Bluedragon1942 
//5/6/2026

"use strict";

// Defining all of the variables for the game
let playerO = { placeholder: "Player O" };
let playerX = { placeholder: "Player X" };
let sound = new Audio("./sounds/congratulations.mp3"); // royalty free sound I found on voicy.io
let boxes = [...document.querySelectorAll('.box')];
let resetBtn = document.querySelector('#reset');
let turnO = true; // This is where Player O starts
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

alert(`\t\t\t   Welcome to Tic-Tac-Toe! \n\nTo play the game, Player O will go first. Click on the boxes to play the game. \n\nPress 'Reset' to reset the current game.`);

// Asks for selected player names when page loads
window.addEventListener("DOMContentLoaded", () => {
    playerO = prompt("Enter Player O's name:");
    playerX = prompt("Enter Player X's name:");

    // Trying to set a placeholder for the input boxes to show the selected names, but it doesn't work for some reason so I just left it as is. 
    document.getElementById("playerO").placeholder = playerO;
    document.getElementById("playerX").placeholder = playerX;

    // fallback conditions if user cancels, doesn't enter a name, or enters the same name
    if (!playerO) playerO = "Player O";
    if (!playerX) playerX = "Player X";

    if (playerO === playerX) {

        alert("Both players cannot have the same name. Please enter different names.");
        playerO = prompt("Enter Player O's name:");
        playerX = prompt("Enter Player X's name:");

    };

    if (playerO == null || playerX == null || playerO.trim() === "" || playerX.trim() === "") {

        playerO = "Player O";
        playerX = "Player X";

    };

    console.log(`Player O: ${playerO}, Player X: ${playerX}`);

});

/* 
List of all possible win patterns for the game which is checked for each turn
Doing it in a 0-8 format to match the index of the boxes for easier checking.
I know that isn't really ment to be liike that for tic-tac-toe but I wanted to try it out and it works fine so I kept it that way. 
*/
const winPatterns = [

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [6, 7, 8],
    [0, 1, 2],
    [3, 4, 5]

];

boxes.forEach((box) => {

    box.addEventListener('click', function () {

        if (turnO) {
            
            box.innerText = 'O';
            box.style.color = 'green';
            turnO = false;
            box.disabled = true;
            checkWinner();

        } 
        
        else {
            
            box.innerText = 'X';
            box.style.color = 'black';
            turnO = true;
            box.disabled = true;
            checkWinner();

        }
    });
});

const enableBoxes = () => {

    for (let box of boxes) {
        
        box.disabled = false;
        box.innerText = "";
    
    }

};

const disableBoxes = () => {

    for (let box of boxes) {

        box.disabled = true;
    
    }

};


const showWinner = (winner) => {
    let winnerName = winner === "O" ? playerO : playerX;

    // tl;dr, wanted to do more customization and researched how to add sounds via JavaScript (thanks to w3schools.com)
    msg.innerHTML = `Congratulations! ${winnerName} wins!` + '<br>' +
                    '<img src="https://media1.tenor.com/m/GWewIVSoJBcAAAAC/yippee.gif" ' +
                    'alt="Yippee celebration gif" ' +
                    'style="width:150px; margin-top:10px;">' + '<br>' + '<br>';
    msgContainer.classList.remove('hide');

    // Replacing the background with a confetti gif I found online to make it more alive
    // Low quality but oh well :/
    document.body.style.backgroundImage = "url('https://media1.tenor.com/m/ovENLMkAf9AAAAAd/confetti.gif')";
    document.body.style.backgroundSize = "cover";

    sound.currentTime = 0; // restarts it if reused
    sound.play().catch(err => console.log("Audio blocked:", err));

    disableBoxes();

    console.log(`${winnerName} wins!`);

};

// Check winner function that calls on the winPatterns array
const checkWinner = () => {

    let hasWin = false;

    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // If found, sets hasWin to true, shows the winner, and returns to stop the function from checking the rest of the patterns
        if (pos1Val !== "" && pos2Val!=="" && pos3Val!=="" && pos1Val === pos2Val && pos2Val === pos3Val) {
            
            showWinner(pos1Val);
            hasWin = true;
            return;
        }

    }

    if (!hasWin) {

        const allBoxes = [...boxes].every((box) => box.innerText !== "");

        if (allBoxes) {

            msgContainer.classList.remove('hide');
            msg.innerText = 'Match Drawn';

        }
    }

};

const resetGame = () => {

    turnO = true;

    enableBoxes();

    msgContainer.classList.add('hide');
    document.body.style.backgroundImage = "";

    console.log("Game reset.");

};

resetBtn.addEventListener('click', resetGame);
