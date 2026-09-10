/* commenting out OG document.write methods in lieu of the function that prints each write method and adds a page break between each
document.write(typeof "type of operator");
document.write(typeof 123);
document.write("ABC" + 123);
document.write(2E310);
document.write(-3E310);
*/


// Researched some better ways to display multiple document.write statements and decided to try out what I found
// Write to the page using the output div

// Establishing variables that can be used for the function using the write() method and the function using the log() method
let YoB1 = 1995;
let YoB2 = 1994;
let YoB3 = 1995;

function write(msg) {
    document.getElementById("output").innerHTML += msg + "<br>";
}

write(typeof "type of operator");
write(typeof 123);
write("ABC" + 123);
write(2E310);
write(-3E310);
write( (10 > 2) && (22 <= 23) ); // two true statements -- Boolean logic = true
write( (52 >= 52) && (42 <= 41) ); // only one statement is true -- Bolean logic = false
write( (25 + 50) == 75); // Comparison that is true
write( (25 + 50) == 72); // Comparison that is false
write(YoB1 === YoB2); // Comparing variables that have different values
write(YoB1 === YoB3); // Comparing two variables that have the same value
write("1995" === 23); // Comparing a string and an intiger that have different values
write("1995" === 1995) // Comparing a string and an intiger that have the same value
write(YoB1 === 1995); // Comparing a variable and an intiger that have the same value
write( (10 > 2) || (22 <= 23) ); // two true statements -- Boolean logic = true because only one needed to be true for an or statement
write( (52 >= 52) || (42 <= 41) ); // only one statement is true -- Bolean logic = true because it is an or statement
write( (52 >= 53) || (42 <= 41) ); // Both statements are false -- Bolean logic = false because it is an or statement
write(!("1995" === 1995)); // The statement is using two different data types with the same value -- which would = false -- so the ! returns a value of true
write(!(YoB3 === 1995)); // The statement is comparing a varible and an intiger that have the same value -- which would = true -- so the ! returns a value of false

/* commenting out individual functions in lieu of a single consolidated function that makes use of cases for each individual method
function my_function0(){
    document.getElementById("Test0").innerHTML = 0/0;
}

function my_function1(){
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_function2(){
    document.getElementById("Test2").innerHTML = isNaN('007');
}

function my_function3(){
    document.getElementById("Test3").innerHTML = isNaN('3.9999');
}
*/

// experminenting with consolidating the multiple functions into one function -- have done something similar to this with writing automated test cases for work before
function runTest(type) {
    let result;

    switch(type) {
        case "0/0":
            result = 0/0;
            document.getElementById("Test0").innerHTML = result;
            break; // adding a break after each case to prevent all cases running after one item is clicked

        case "string":
            result = isNaN("This is a string")
            document.getElementById("Test1").innerHTML = result;
            break;

        case "007":
            result = isNaN("007");
            document.getElementById("Test2").innerHTML = result;
            break;
        
        case "decimal":
            result = isNaN("3.99999");
            document.getElementById("Test3").innerHTML = result;
            break;
    }
}


// Console logs
// console.log(2 + 2); // commenting out to make use of the same type of function I used with the write() methods w/ the log() methods

function log(msg) {
    console.log(msg);
}

log(2 + 2);
log(typeof "string");
log(243 * 22);
log( (3 < 5) && (27 <= 27) );
log( (32 < 52) && (72 <= 7) );
log( (25 + 50) == 75); // Comparison that is true
log( (25 + 50) == 72); // Comparison that is false
log(YoB1 === YoB2); // Comparing variables that have different values
log(YoB1 === YoB3); // Comparing two variables that have the same value
log("1995" === 23); // Comparing a string and an intiger that have different values
log("1995" === 1995) // Comparing a string and an intiger that have the same value
log(YoB1 === 1995); // Comparing a variable and an intiger that have the same value
log( (10 > 2) || (22 <= 23) ); // two true statements -- Boolean logic = true because only one needed to be true for an or statement
log( (52 >= 52) || (42 <= 41) ); // only one statement is true -- Bolean logic = true because it is an or statement
log( (52 >= 53) || (42 <= 41) ); // Both statements are false -- Bolean logic = false because it is an or statement
log(!("1995" === 1995)); // The statement is using two different data types with the same value -- which would = false -- so the ! returns a value of true
log(!(YoB3 === 1995)); // The statement is comparing a varible and an intiger that have the same value -- which would = true -- so the ! returns a value of false