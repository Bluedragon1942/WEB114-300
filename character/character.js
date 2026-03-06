"use strict";

alert("Welcome to the Adventure Realm");

const characterName = prompt("What is your character's Name?");

const pet = prompt(`What kind of pet does ${characterName} have? (Dragon, Wolf, Robot, Unicorn, Pheonix, etc.)`);

const superpower = prompt(`What is the ${characterName}'s special superpower?`);

const likesFighting = confirm(`Does ${characterName} like fighting monsters?`);

alert(`Gathering magic for ${characterName}.. almost ready!`);

alert(`======================================
    Name: ${characterName} 
    Pet: ${pet}
    Superpower: ${superpower}
    Monster fighter? ${likesFighting}
    In a far away land, the brave hero of ${characterName} set off on a journey for greatness.
    With is his trusty ${pet}, they wield the incredible power of ${superpower}!
    The realm awaits your legend...
    ======================================`);
