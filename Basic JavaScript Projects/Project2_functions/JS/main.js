function myFunction()    {
    var str1 = "This is the first variable", //Establishes the first variable
        str2 = 'This is the second variable'; //Establishes the second variable
        str1 += " and this is a string concatenated with the first string of the str1 variable" //Concatenates an additioanl string to the first string of the first variable
    document.getElementById("Button_Text").innerHTML = str1; //Establishing a meythod in the function using the first variable and Button_Text HTML ID
    document.getElementById("Button2_Text").innerHTML = str2; //Establishing a method in the function using the second varibale and Button2_Text HTML ID
}