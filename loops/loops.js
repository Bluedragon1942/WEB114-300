"using strict"
// 4/1/2026 
// Happy April Fools!
// Using for loops

let fragile = 0;
let load = 0;
let inspect = 0;
let cargoNum = 0;

// Checking to see if user inputs string or any other type besides a number
// and is scallable for x amount of crates.
// Note: Could put a cap limit on it to not overbear the system.
while (true) {
    let input = prompt("Enter the amount of cargo you want to scan:");

    // Used if user clicks Cancel
    if (input === null) {
        console.log("Program cancelled by user.");
        break;
    }

    // Converting the input to the specified cargoNum since it is a num value
    input = input.trim();
    cargoNum = Number(input);

    // exiting since valid input
    if (!isNaN(cargoNum) && cargoNum > 0) {
        break; 
    }

    alert("Entry is not valid. Please enter a positive number.");
}

if (cargoNum > 0) {

    for (let i = 1; i <= cargoNum; i++) {

        if (i % 5 === 0) {
            console.log(`Crate ${i}: Handle with care`);
            fragile++;
        }
        else if (i % 2 === 0) {
            console.log(`Crate ${i}: Load crate`);
            load++;
        }
        else {
            console.log(`Crate ${i}: Inspect crate`);
            inspect++;
        }
    }
}

// Total of crates (fragile, load, and inspect)
console.log(`Total crates scanned: ${cargoNum}`);
console.log(`${fragile} fragile crates`);
console.log(`${load} load crates`);
console.log(`${inspect} inspect crates`);
