//Basic Alert
alert("This is an alert message");

//Alert using a vaiable
var wA = "This is a window.alert message using a variable that contains a \' and a \"";
window.alert(wA);

//Setting multiple variables in a single statement and displaying them using document.write
var x = "\"Be who you are and say what you feel," + " because those who mind don\'t matter and those who matter don\'t mind.\"" + " - Dr. Seuss",
    y = 'random words that won\'t be displayed. They simply serve as an example of assigninging multiple varibales in a single var statement',
    eX = '3+3',
    Sent1 = "This is the beginning of the string", //Setting the Sent1 variable
    Sent2 = ' and this is the end of the string'; //Setting the Sent2 variable
document.write(Sent1 + Sent2); //Concatentating Sent1 and Sent2 and displaying them using the document.write method

//My First Function
function My_First_Function()    {
    var str = "This is the button test!";
    document.getElementById("Button_Text").innerHTML = str;
}
