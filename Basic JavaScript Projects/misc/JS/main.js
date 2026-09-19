// This function is called when the user selects a mood from the dropdown menu
function showMood() {
    const mood = document.getElementById("moodSelect").value; // Get the selected mood
    const output = document.getElementById("result"); // Get the output element
    
    // Display a message based on the selected mood
    if (mood === 'happy') { 
        output.textContent = 'Nice! Keep the good vibes going!'; // Set the display message for when happy is selected
    }
    else if (mood === 'tired') {
        output.textContent = 'Hang in there -- maybe grab a snack or take a break.'; // Set the display message for when tired is selected
    } else if (mood === 'angry') {
        output.textContent = 'Deep breaths. You\'ve got this!'; // Set the display message for when angry is selected
    } else {
        output.textContent = 'Pick a mood first'; // Set the display message if no mood is selected
    }
}