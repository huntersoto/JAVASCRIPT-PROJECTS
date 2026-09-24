function Sport_Function() {
    var Sport_Output;
    var Sports = document.getElementById("Sport_Input").value;
    var Sport_String = " is a great sport!";
    switch(Sports) {
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;

        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;

        case "Baseball":
            Sport_Output = "Baseball" + Sport_String;
        break;

        case "Softball":
            Sport_Output = "Softball" + Sport_String;
        break;

        case "Soccer":
            Sport_Output = "Soccer" + Sport_String;
        break;

        case "Tennis":
            Sport_Output = "Tennis" + Sport_String;
        break;

        default:
            Sport_Output = "Please enter the name of the sport exactly as it was written in the list above.";
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function Hello_World_Function() {
    var a = document.getElementsByClassName("Click");
    a[0].innerHTML = "Be sure to select only one of the sports from the list";
}


var c = document.getElementById("Sport_Canvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, c.width, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, c.width, c.height);