/* */

//Addition Function
function mathFunction(){
    var addition = 234 + 172;
    document.getElementById('Math').innerHTML = "234 + 172 = " + addition;
}

//Multiplication Function
function mathFunction1(){
    var multiplication = 234 * 172;
    document.getElementById('Math1').innerHTML = "234 x 172 = " + multiplication;
}

//Division function
function mathFunction2(){
    var division = 234 / 172;
    document.getElementById('Math2').innerHTML = "234 / 172 = " + division;
}

//Subtraction function
function mathFunction3(){
    var subtraction = 234 - 172;
    document.getElementById('Math3').innerHTML = "234 - 172 = " + subtraction;
}

//Function the combines all above math operations (addition, subtraction, multiplication, & division) into a single variable
function mathFunction4(){
    var allTogether = (234 - 172) + (42 / 6) * 8;
    document.getElementById('Math4').innerHTML = "(234 - 172) + (42 / 6) * 8 = " + allTogether;
}

//Remainder example
function mathFunction5(){
    var divisionRemainder = 234 % 172;
    document.getElementById('Math5').innerHTML = "234 devided by 172 has a remainder of: " + divisionRemainder;
}

//Negation Operator
function mathFunction6(){
    var x = 52;
    document.getElementById('Math6').innerHTML = -x;
}

//Increment Operator
function mathFunction7(){
    var x = 52;
    x++;
    document.getElementById('Math7').innerHTML = x;
}

//Decrement Operator
function mathFunction8(){
    var x = 52;
    x--;
    document.getElementById('Math8').innerHTML = x;
}

//Random Number Example
function mathFunction9(){
    var x = Math.random() * 5,
        y = x / 5
    document.getElementById('Math9').innerHTML = x + ' / 5 = ' + y;
}

//Math Object and Math Object Method
function mathFunction10() {
    var x = Math.random(),
        y = 5;
    document.getElementById('Math10').innerHTML = 'x<sup>y</sup> = ' + Math.pow(x, y);
}