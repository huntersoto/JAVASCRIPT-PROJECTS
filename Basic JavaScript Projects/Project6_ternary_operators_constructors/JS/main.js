
/*
function Ride_Function() {
    var height, Can_Ride;
    height = document.getElementById("height").value.tim(); // trim() removes any erroneous spaces that are entered
    Can_Ride = (height < 52) ? "Unfortunately, you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride this ride."
}
*/

// Altering the example function from page 128 to include an empty string check, which prevents an empty string from being a valid submission, and prompts a unique warning message in the event that an empty string is submitted. Also included a restriction on the input field that prevents users from entering anything other than numbers.

/*
// Prevents the use of anything other than a number being entered into the input field
    document.getElementById("height").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

// Height verification program example
function Ride_Function() {
    const height = document.getElementById("height").value.trim(); // trim() removes any erroneous spaces that are entered

    // Add a check for an empty string input
    if (height === "") {
        document.getElementById("Ride").innerHTML = "Please enter a number before submitting your response.";
        return; // ends function if an empty string is entered
    };

    const Can_Ride = (height < 52) ? "Unfortunately, you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride this ride.";
}
*/

// Age verification program challenge

// Prevents the use of anything other than a number being entered into the input field
    document.getElementById("age").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // the regex "/[^0-9]/g" matches anything that is not a digit; .replace() removes those characters instantly
});

    // Using a similar function to the provided example from page 128:
/*
function Age_Function() {
    var age, Can_Vote;
    age = document.getElementById("age").value.tim(); // trim() removes any erroneous spaces that are entered
    Can_Vote = (age < 52) ? "Unfortunately, you are not old enough":"Thank you for verifying. You are eligible";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
*/

    // My own function, like the one I created while experimenting with the height verification example, that includes an empty string check, which prevents an empty string from being a valid submission, and prompts a unique warning message in the event that an empty string is submitted.
function Age_Function() {
    const age = document.getElementById("age").value.trim(); // trim() removes any erroneous spaces that are entered

    // Add a check for an empty string input
    if (age === "") {
        document.getElementById("Vote").innerHTML = "Please enter your age (in years) before clicking the submit button";
        return; // ends function if an empty string is entered
    };

    const Can_Vote = (age < 18) ? "Unfortunately, you are not old enough":"Thank you for verifying. You are eligible";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

// Keyword Assignment

function CFBTeam(University, Location, TeamName, Mascot) {
    this.CFBTeam_University = University;
    this.CFBTeam_Location = Location;
    this.CFBTeam_TeamName = TeamName;
    this.CFBTeam_Mascot = Mascot;
}

var OSU = new CFBTeam("Oklahoma State", "Stillwater, OK", "Cowboys", "Pistol Pete");
var TTU = new CFBTeam("Texas Tech", "Lubbock, TX", "Red Raiders", "The Masked Rider");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = OSU.CFBTeam_Location + " is the home of the " + OSU.CFBTeam_University + " " + OSU.CFBTeam_TeamName + " and their pistol spinning mascot " + OSU.CFBTeam_Mascot + ", and it is here that they will face off with the " + TTU.CFBTeam_University + " " + TTU.CFBTeam_TeamName + ", of " + TTU.CFBTeam_Location + ", in a BIG 12 college football showdown on November 14th.";
}


/*
    // RESERVED KEYWORD CHALLENGE
var x = Abstract;

console.log(x)
*/

// Nested Function Example

function message_Function(){
    document.getElementById("Nested_Function").innerHTML = BuildMessage();
    function BuildMessage() {
        var initial = "You found my";
        function add_String() {initial += " nested function example.";}
        add_String();
        return initial;
    }
}