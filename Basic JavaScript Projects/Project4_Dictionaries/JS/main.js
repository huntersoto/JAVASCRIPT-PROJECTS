//Probably spent too much time on the petsounds/user input/reaction portion of this but it was fun and I learned some new things. So maybe it balances out.

//Dictionary to define petSounds based on pet type
const petSounds = {
        dog: "Woof!",
        cat: "Meow!",
        hamster: "Squeak!",
        bird: "Chirp!",
        snake: "Hiss!",
        fish: "Blub blub...",
        deleteMe: "words to be deleted"
};

//Function to react to the pet type a user entered
function reactToPet(petType) {
  petType = petType.toLowerCase(); // converts the entered text to lower case so that it can match the variables set in the dictionary
    
  if (petSounds[petType]) {
    return `Your ${petType} says: ${petSounds[petType]}`; // Reaction message if the pet type exists in the dictionary -- need to use ` instead of ' or " for the message to display correctly
  } else {
    return `I didn't know that was a type of pet, but it sounds cool!`; // Reaction message if the pet type does not exist in the dictionary. This should account for any typo's and/or pet types that do not exist in the dictionary. -- don't have to use the ` here (works fine with ' or ") just using it to be consistent.
  }
}

function handlePet() {
  const userPet = document.getElementById("petInput").value.trim(); //Establishes the user's pet varibale based on their text input -- included .trim() to remove any erroneous spaces entered into the input field
  const message = reactToPet(userPet); //Establishes the resulting reaction variable based on the userPet variable

  document.getElementById("reaction").textContent = message; //Method to display the reaction message in the p element
  //alert(message) //Method to display the reaction message as a window alert 
}



//Dictionary for delete operator assignment
const test = {
        One: "text",
        Two: "text",
        Three: "Dare you to click the other button..."
};

//First function -- does not delete any variables in the dictionary -- changes button text depending on if the variable test.Three still exists in the dictionary
function TestFunction() {
    if ("Three" in test) {
        document.getElementById("beforeDelete").innerHTML = test.Three; //Button text if the button is clicked and the variable still exists
    } else {
        document.getElementById("beforeDelete").innerHTML = "Womp...womp..."; //Button text if the button is clicked and the variable no longer exists
    }
}

//Second function -- deletes a variable from the dictionary and changes the button text
function deleteTestFunction() {
    delete test.Three;
    document.getElementById("afterDelete").innerHTML = "Bye..Bye..Variable -- Now click the first button";
}