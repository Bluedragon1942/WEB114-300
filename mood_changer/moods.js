// Bluedragon1942
// 4/14/2026

// Again, poor use of IDs. Only suppost to have one in the CSS rule, rather do classes but since it is explain
// that it can be done with Id's then it's fine for what we are doing...

// Selecting Elements

const moodDisplay = document.querySelector("#moodDisplay");
const buttonsContainer = document.querySelector("#buttonsContainer");

// Button selections
const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");


// Mood list config objects

const moods = {

  happy: {
    name: "Happy",
    bg: '#FFD700',
    text: '#bd26b0',
    message: 'Warm smiles and happy pleasures!'
  },

  calm: {
    name: "Calm",
    bg: '#A8DADC',
    text: '#1D3557',
    message: 'Breathe deep and relax your mind. Take a break for awhile :)'
  },

  angry: {
    name: "Angry",
    bg: '#D00000',
    text: '#FFFFFF',
    message: 'Take a deep breath and cool the fire inside.'
  },

  sleepy: {
    name: "Sleepy",
    bg: '#6C757D',
    text: '#F8F9FA',
    message: 'Rest your eyes and drift away into a wonderland.'
  },


// Using a reset button as a "mood" in case user wants to go again :/. Sure, reloading the page will work but eh
  reset: {
    name: "reset",
    bg: '#dfdfdf',
    text: '#000000',
    message: 'No Mood Selected...'
  }

};


// Creating the function that changes the page info

function changeMood(moodName) {

  const mood = moods[moodName];

  // Updating the Page (assigning the elements)

  document.body.style.backgroundColor = mood.bg;
  document.body.style.color = mood.text;

  moodDisplay.textContent = mood.message;

  document.title = mood.name;

  console.log("Mood selected:", moodName);
  console.log("Mood settings:", mood);
}

// Yes, took your random color generator and used it for a fun little bit :)
function changeBackground() {
  let randomColor =
    "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");


  document.body.style.backgroundColor = randomColor;

  // Keep text readable (optional: set to white or black)
  document.body.style.color = "#000000";

  // Match the other moods while keeping function seperate
  moodDisplay.textContent = "Um... I don't think this works...";
  document.title = "Random Mood";

  console.log("Random mood activated:", randomColor);
}


// Event Handlers

function handleHappyClick() {
  changeMood("happy");
}

function handleCalmClick() {
  changeMood("calm");
}

function handleAngryClick() {
  changeMood("angry");
}

function handleSleepyClick() {
  changeMood("sleepy");
}

function handleresetClick() {
  changeMood("reset");
}



// Event Listeners

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
resetBtn.addEventListener("click", handleresetClick);
randomBtn.addEventListener("click", changeBackground);
