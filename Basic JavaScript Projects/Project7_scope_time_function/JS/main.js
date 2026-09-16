// Using global variables
var x = 10 // setting the variable globally
function Add_Numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_Numbers_2() {
    document.write(x + 200);
}
Add_Numbers_1();
Add_Numbers_2();

// Using local variables
function Add_Numbers_3() {
    var x = 20 // setting the variable locally
    document.write(20 + x + "<br>");
}
function Add_Numbers_4() {
    var x = -100 // setting the variable locally
    document.write(x + 200);
}
Add_Numbers_3();
Add_Numbers_4();


function Add_Numbers_5() {
    var x = -100
    console.log(y + 245);
}


// if and else Statements practice
// Example if statement
if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() <= 23) {
        document.getElementById("Greeting").innerHTML = "Not too late yet! Better keep working!";
    }
    // adding the else statement so that something happens if the if is not met
    else {
        document.getElementById("Greeting").innerHTML = "Getting a bit late, but can probably keep working for a bit longer.";
    }
}

// My if statement practice
function my_Date() {
    if (new Date().getMonth() < 6) {
        document.getElementById("halfYear").innerHTML = "You are in the first half of the year!";
    }
    // adding the else statement so that something happens if the if is not met
    else { 
        document.getElementById("halfYear").innerHTML = "You are in the second half of the year!";
    }
}

// Example else statements
function Age_Function() {
    Age = document.getElementById("Age").value; // establishing the Age variable and linking it to the input field in the HTML using getElementByID and telling it to use the value that the user enters
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink; // linking back to the HTML submit button and telling it to print the Drink message based on the if else statement
}

// Else if Statements
function Time_function() {
    var Time = new Date().getHours(); // establishing the time varibale using the getHours() method
    var Reply; // establishing the Reply variable that will be used as the display value based on whichever statement is true from the if, else if, or else statements
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // linking back to the button in the HTML and displaying the value of the true statement from the if, else if, or else statements
}