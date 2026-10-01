function getReceipt() {
    // This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; // Initialize the receipt text
    var runningTotal = 0; // Initialize the running total
    var sizeTotal = 0; // Initialize the size total
    var sizeArray = document.getElementsByClassName("size"); // Get all size radio buttons
    for (var i = 0; i < sizeArray.length; i++) { // Loop through all size radio buttons
        if (sizeArray[i].checked) { // Check if the current size radio button is selected
            var selectedSize = sizeArray[i].value; // Get the value of the selected size
            text1 = text1+selectedSize+"<br>"; // Add the selected size to the receipt text
        }
    }
    if (selectedSize === "Personal Pizza") { // Check if the selected size is a Personal Pizza
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") { // Check if the selected size is a Small Pizza
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") { // Check if the selected size is a Medium Pizza
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") { // Check if the selected size is a Large Pizza
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") { // Check if the selected size is an Extra Large Pizza
        sizeTotal = 16;
    } else if (selectedSize === "Excessively Large Pizza") { // Check if the selected size is an Excessively Large Pizza
        sizeTotal = 20;
    }
    runningTotal = sizeTotal; // Set the running total to the size total
    console.log(selectedSize+" = $"+sizeTotal+".00"); // Log the selected size and its price
    console.log("size text1: "+text1); // Log the current receipt text after adding the size
    console.log("subtotal: $"+runningTotal+".00"); // Log the subtotal after adding the size
    //these variables will get passed on to each function
    getTopping(runningTotal,text1); // Call the getTopping function to process toppings
};

    // Function to process toppings
function getTopping(runningTotal,text1) { // Function to process toppings
    var toppingTotal = 0; // Initialize the topping total to 0
    var selectedTopping = []; // Array to store selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); // Get all topping elements
    for (var j = 0; j < toppingArray.length; j++) { // Loop through all topping elements
        if (toppingArray[j].checked) { // Check if the topping is selected
            selectedTopping.push(toppingArray[j].value); // Add the selected topping to the array
            console.log("selected topping item: ("+toppingArray[j].value+")"); // Log the selected topping item
            text1 = text1+toppingArray[j].value+"<br>"; // Add the selected topping to the receipt text
        }
    }
    var toppingCount = selectedTopping.length; // Get the number of selected toppings
    if (toppingCount > 1) { // If more than one topping is selected, charge for additional toppings
        toppingTotal = (toppingCount - 1); // Charge for additional toppings beyond the first one
    } else {
        toppingTotal = 0; // No additional charge if only one topping is selected
    }
    runningTotal = (runningTotal + toppingTotal); //
    console.log("total selected topping items: "+toppingCount); // Log the total number of selected toppings
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); // Log the topping calculation
    console.log("topping text1: "+text1); // Log the current receipt text after adding toppings
    console.log("Purchase Total: "+"$"+runningTotal+".00"); // Log the final purchase total
    document.getElementById("showText").innerHTML=text1; // Display the receipt text in the showText element
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; // Display the total price in the totalPrice element
}
