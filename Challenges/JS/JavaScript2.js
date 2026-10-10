// JSON text (string)
const jsonText = '{ "name": "Hunter", "age": 32, "city": "Oklahoma City" }';

// Convert JSON string → JavaScript object
const obj = JSON.parse(jsonText);

// Build readable output
let output =
  "Name: " + obj.name + "\n" +
  "Age: " + obj.age + "\n" +
  "City: " + obj.city;

// Display in the browser
document.getElementById("output").textContent = output;
