"use strict"

let favMonth = prompt("What is your favorite month?")

favMonth = favMonth.trim().toLowerCase()
// Error Checking
// Note: Only using this type of method until we learn loops

if (favMonth === "")
    {
        alert('Please enter a valid month');
        favMonth = prompt(`What is your favorite month`)
    }

// Implemented loop for error checking 

// while (favMonth === "" || favMonth === null) {
//     alert('Please enter a valid month');
//     favMonth = prompt("What is your favorite month");
// }

switch (favMonth) {

    case "january":
    case "february":
    case "december":
        console.log("You love the winter months!");
        break;

    case "march":
    case "april":
    case "may":
        console.log("Spring is nice with everything blooming.");
        break;

    case "june":
    case "july":
    case "august":
        console.log("You enjoy the summer months!");
        break;

    case "september":
    case "october":
    case "november":
        console.log("Fall is fun with all of the pretty colors.");
        break;

    default:
        // I don't understand this part since it only has 12 months to choose from
        console.log("Other months are interesting too!");
        alert('Please enter a valid month');
}
