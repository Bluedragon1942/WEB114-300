// Prompts the user to enter a password
let password = prompt("Enter your password:");

password = password.trim()

// Loop to add re-entry in case user doesn't enter anything
while (password === ""){
    alert("No input detected! Try again!")
    let password = prompt("Enter your password:");
}
if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/\d/)) {
    alert("Access granted!");
    console.log("Congratulations! This is the secret message:");
    console.log("The thing you have been avoiding all day, do it right now.");
} 
else {
    alert("Access denied");
    console.log("Password does not meet the required criteria. Please try again");
    let password = prompt("Enter your password:");
}
