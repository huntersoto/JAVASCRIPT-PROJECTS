// Concat() method example
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() method exmample
function slice_Method() {
    var Sentence = "This sentence will be sliced";
    var Section = Sentence.slice(22, 27);
    document.getElementById("Slice").innerHTML = Section;
}

// toUpperCase() converts a string to uppercase
function toUpperCase_Method() {
    var text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

// search() method searchs a string for a string (or a regular expression) and returns the position of the match
function search_Method() {
    var sentence = "This is an example of the search() method. Here is an extra search to show it won't be included.";
    var search = sentence.search("search");
    document.getElementById("search").innerHTML = search;
}

// number methods example
function string_Method() {
    var x = 234232;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// toPrecision() method example
function precision_Method() {
    var x = 123.232323232323232323;
    document.getElementById("Precision").innerHTML = x.toPrecision(5);
}

// toFixed() method converts a number to a string and/or rounds the string to a specified number of decimals -- if the number of decimals are higher than in the number zeros are added -- toFixed() returns no decimals
function fixed_Method() {
    var x = 232.4;
    document.getElementById("fixed").innerHTML = x.toFixed(5);
}

// valueOf() method returns the string representation of the specified value
function valueOf_Method() {
    var x = 235.2356155;
    var y = 5;
    var z = 2*x + 5*y;
    document.getElementById("valueOf").innerHTML = z.valueOf().toFixed();
}