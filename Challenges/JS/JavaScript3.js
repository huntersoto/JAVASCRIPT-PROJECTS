// Store a value
localStorage.setItem("username", "Hunter");

// Retrieve the value
const storedName = localStorage.getItem("username");

// Remove the value
// localStorage.removeItem("username");

// Display results
document.getElementById("output").textContent =
  "Stored username: " + storedName;
