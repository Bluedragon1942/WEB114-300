"use strict"

let hourlyWage = prompt("What is your hourly wage?");
// Checking if it works
//console.log(`You entered ${hourlyWage}, is that correct?`);

// Used a second variable to trim first variable since you can't do it on a prompt
let hoursWorked1 = prompt("How many hours did you work this week?");
let hoursWorked = hoursWorked1.trim()
// Checking if it works
//console.log(`You entered ${hoursWorked}. Is that correct?`);
// Total pay
let grossPay = hourlyWage * hourlyWage;
// Tax deduction by 10%
let taxes = 0.10 * grossPay;
// Total amount after taxes
let netPay = grossPay - taxes;

console.log(`You earned ${netPay.toFixed(2)} this Week.`);

// Condition evaluating hoursWorked during this week

if (hoursWorked > 40){
    
    console.log(`You worked overtime this week!`)

}
else if (hoursWorked === 40){
    
    console.log(`You worked exactly ${hoursWorked}`)

}
else {
    
    console.log("No overtime this week.")

}

// Condition evaluating final weekly earnings

if (netPay > 800){
    
    console.log("Great paycheck this week!")

}
else {

    console.log("Keep working toward a bigger paycheck!")

}
