// Object to stringify
const person = {
  name: "Hunter",
  age: 32,
  city: "Oklahoma City",
  skills: ["JavaScript", "HTML/CSS", "SQL"]
};

// Convert object → JSON string
const jsonString = JSON.stringify(person, null, 2); // pretty-print with 2 spaces

// Output to the page
document.getElementById("output").textContent = jsonString;
