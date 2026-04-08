"use strict";

// FUNCTION: calcGasAvg()
function calcGasAvg() {
    // Global variables
    let entryCount = 0;
    let totalGas = 0;

    // First prompt to user
    let input = prompt("Enter your first week's gas total. Enter -1 when done.");
    
    
    if (input === null) {
        return null;
    }

    let weeklyGas = Number(input);

    while (weeklyGas !== -1) {

        // Validating the number entry
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");
            
            input = prompt("Enter your first week's gas total. Enter -1 when done.");
            if (input === null) return null;

            weeklyGas = Number(input);
            continue;
        }

        // Adding the valid entry to count & total
        totalGas += weeklyGas;
        entryCount++;

        // Asking for next entry to the user
        input = prompt("Enter your next week's gas total. Enter -1 when done.");
        if (input === null) return null;

        weeklyGas = Number(input);
    }
    // End of function




    // Calculating average
    let average = (entryCount > 0) ? totalGas / entryCount : 0;

    // Returning selected values
    return {
        average: average,
        count: entryCount,
        total: totalGas
    };
}

// MAIN PROGRAM

let username = prompt("Enter your name:");

if (username === null) {
    alert("You cancelled the name prompt.");
} else {
    let user = username.trim();

    if (user === "") {
        alert("You must type a name.");
    } else {

        let result = calcGasAvg();

        if (result === null) {
            alert("You cancelled entering gas totals.");
        } else {

            let avg = result.average;
            let count = result.count;
            let total = result.total;

            // Output the gas result
            // Note: Decided to use count for conditions on the number of entires instead of entryMessage since
            // count is used and already set. Only thing I can change would be the actual output of the alert.
            // Or from past classes, make a whole new function specifically for this.

            if (count === 0) {
                alert("No gas totals were entered.");
            } else if (count === 1) {
                alert(`${user}, your gas total is $${total.toFixed(2)}.`);
            } else {
                alert(`${user}, your average weekly gas bill is $${avg.toFixed(2)}.`);
            }


            if (count === 0) {
                alert("No gas totals were entered.");
            } else if (count === 1) {
                alert("You entered 1 gas total.");
            } else {
                alert(`You entered ${count} gas totals.`);
            }
        }
    }
}
