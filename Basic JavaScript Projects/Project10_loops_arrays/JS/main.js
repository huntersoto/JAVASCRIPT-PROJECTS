// /*
function Call_Loop() {
    var roll = 0; // Start with no roll yet
    const target = 6; // The number we want to hit

    document.getElementById("Loop").innerHTML = ""; // Clear previous rolls

    while (roll !== target) {
        roll = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
        document.getElementById("Loop").innerHTML += roll + " "; // Display the roll
    }
    document.getElementById("LoopSuccess").innerHTML += "<br>You rolled a " + target + "!"; // Display the final message
}

/*
 // added a reset button to clear the roll results and sucess message
function resetLoop() {
    roll = 0; // Reset the roll
    document.getElementById("Loop").innerHTML = ""; //clear the rolls
    document.getElementById("LoopSuccess").innerHTML = ""; // clear the success message
}
*/

// */

/*
//Adding an extra function to consolidate the submit button and reset button into one button that will reset the loop and start over
//Considered trying to find a way to enhance the success message to include the number of rolls it took to hit the target. But I didn't want to waste more time. Maybe for another day.

let hasRun = false; // Tracks whether the loop has already run

function ButtonClick() {
    if (!hasRun) {      //if the loop hasn't ran
        Call_Loop();
        hasRun = true;
    } else {
        resetLoop();
        hasRun = false;
    }
}

function Call_Loop() {
    var roll = 0; // Start with no roll yet
    const target = 6; // The number we want to hit

    document.getElementById("Loop").innerHTML = ""; // Clear previous rolls

    while (roll !== target) {
        roll = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
        document.getElementById("Loop").innerHTML += roll + " "; // Display the roll
    }
    document.getElementById("LoopSuccess").innerHTML += "<br>You rolled a " + target + "!"; // Display the final message
}
 // added a reset button to clear the rolls and start over
function resetLoop() {
    roll = 0; // Reset the roll
    document.getElementById("Loop").innerHTML = ""; //clear the rolls
    document.getElementById("LoopSuccess").innerHTML = ""; // clear the success message
}

*/

// String Length Property
function stringLength(){
    let text = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
    let length = text.length

    document.getElementById("stringlength").innerHTML = "It is " + length + " characters in total";
}


// For Loop Assignment
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


// Arrays and objects
function array_Function() {
    let Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";

    //let randomindex = Math.floor(Math.random() * Cat_Pictures.length); // Generate a random index based on the length of the array

    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Pictures[1] + ".";
    //document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Pictures[randomindex] + "."; // Use the random index to select a random cat picture
}

// Const Keyword
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Return Statement -- The return statement stops the execution of a function and returns a value.
document.getElementById("return").innerHTML = myFunction(15, 33); // Call the function with arguments 15 and 33 and display the result

function myFunction(a, b) { // Define the function with parameters a and b
  return a * b;   // Return the product of a and b
  
} 

// Object Assignment
let car = { // Create an object named 'car'
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() { // Define a method named 'description' for the car object 
        return "The car is a " + this.year + this.color + this.make + this.model; // Use 'this' to refer to the properties of the car object
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); // Call the description method and display the result


// Break Statement -- The break statement terminates the execution of a loop or a switch statement.
let text1 = ""; // Initialize an empty string to store the output

for (let i = 0; i < 10; i++) { // Loop from 0 to 9
  if (i === 3) { break; } // If i equals 3, exit the loop
  text1 += "The number is " + i + "<br>"; // Append the current value of i to the output string
}

document.getElementById("break").innerHTML = text1;


// Continue Statement -- The continue statement skips the current iteration in a loop. The remaining code in the iteration is skipped and processing moves to the next iteration.
let text2 = ""; // Initialize an empty string to store the output

for (let i = 1; i < 10; i++) { // Loop from 1 to 9
  if (i === 3) { continue; } // If i equals 3, skip the rest of the loop body and continue with the next iteration
  text2 += i*10 + "<br>"; // Append the current value of i multiplied by 10 to the output string
}

document.getElementById("continue").innerHTML = text2;