"use strict"

alert("Welcome to the quiz game!")

// Question 1
let answer1 = prompt(`What is the capital of France?`).toLocaleLowerCase()

// Question 2
let answer2 = prompt(`What is 6+7?`)

// Question 3
let answer3 = prompt(`Where does spongebob live?`).toLocaleLowerCase()

// Question 4
let answer4 = prompt(`What is the square root of 64?`)

// Question 5
let answer5 = prompt(`What is the name of this character? --> * `).toLocaleLowerCase()

// Answer conditions
if (answer1 === "paris"){
   
    console.log("Correct!")
}
else {

    console.log("Close one, think bagguetts")

}

if (answer2 === "13"){

    console.log("Correct!")

}
else {

    console.log("Nope! Try again!")

}

if (answer3 === "pineapple"){
    
    console.log("Correct!")

}

else {

    console.log("Not quite! Who lives in a p____ under the sea.....")

}

if (answer4 === "8"){

    console.log("Correct!")

}

else {

    console.log("Nope! Try again!")

}

if (answer5 === "octothorp"){

    console.log("Correct!")

}

else {

    console.log("Nope! Think of an octopus...")

}
