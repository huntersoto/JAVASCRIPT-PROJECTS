# JavaScript Projects

These are projects I built while learning JavaScript at The Tech Academy. They range from small exercises covering core language concepts to full multi-page sites built with HTML, CSS, JavaScript, jQuery, Bootstrap, and React.

## Projects

- [Pizza Menu](#pizza-menu)
- [Tic-Tac-Toe Game](#tic-tac-toe-game)
- [Calculator](#calculator)
- [To-Do List App](#to-do-list-app)
- [Academy Cinemas](#academy-cinemas)
- [Simple Recipes](#simple-recipes)
- [One-Page Portfolio Website](#one-page-portfolio-website)
- [API Assignment](#api-assignment)
- [React Projects](#react-projects)
- [jQuery Classic Cars](#jquery-classic-cars)
- [jQuery Challenge](#jquery-challenge)
- [AJAX Basics](#ajax-basics)
- [Challenges](#challenges)
- [Advanced JavaScript Projects](#advanced-javascript-projects)
- [Basic JavaScript Projects](#basic-javascript-projects)
- [Console & Debugging Exercises](#console--debugging-exercises)
- [Misc](#misc)

### Pizza Menu

This project is a menu used to order a pizza with a selection of sizes, crusts, and toppings. It takes the selected options, builds an itemized receipt, and calculates the total price for the order.

**Folder:** `Pizza_Project`

### Tic-Tac-Toe Game

The classic game of tic-tac-toe played against the computer. The player places X's and O's on the board while the computer picks a random open square on its turn. The game checks for every win condition after each move, draws a line through the winning row, detects ties, and plays sound effects for placements, wins, and tie games.

**Folder:** `TicTacToe`

### Calculator

A basic 4-function calculator. Users can add, subtract, multiply, and divide on a sleek web version of a calculator.

**Folder:** `Advanced JavaScript Projects` (`calculator.html`)

### To-Do List App

A to-do list that lets users add tasks and remove them with a click. Tasks are saved to the browser's `localStorage` as a JSON string, so the list persists between page refreshes and browser sessions. Empty entries are ignored, and the list re-renders automatically whenever a task is added or removed.

**Folder:** `todo_app`

### Academy Cinemas

A responsive movie theater website built with Bootstrap 5 and jQuery. It features a "Now Playing" section with movie cards and hover popovers that display star ratings, a ticket purchase form that confirms the selected movie, showtime, and quantity with a Bootstrap toast, a contact section, and a navigation bar that shrinks as the user scrolls.

**Folder:** `Academy-Cinemas`

### Simple Recipes

A recipe website with a featured recipe and a collection of additional recipes. Clicking a recipe opens a pop-up modal with the full details, which automatically closes after 10 seconds or when the user dismisses it. The page also includes a contact form with JavaScript validation that checks every field and uses a regular expression to verify the email address format.

**Folder:** `Simple-Recipes`

### One-Page Portfolio Website

A single-page personal portfolio site with an about section, a video section, and a contact form. It includes an image gallery with a modal lightbox, next/previous slide controls, clickable thumbnails, and captions.

**Folder:** `One-Page Website`

### API Assignment

Two small pages that consume public REST APIs using the `fetch()` API and promises:

- **Random Joke Generator** – pulls a setup and punchline from the Official Joke API and displays it on the page.
- **Random Dog Image** – fetches a random dog photo from the Dog CEO API and renders it in an image element.

Both handle request failures gracefully with a `.catch()` that shows an error message instead of a blank page.

**Folder:** `API Assignment`

### React Projects

An introduction to React, progressing from plain-script examples to a full Create React App project:

- **React_1** – a counter component built with `React.createClass` that re-renders every second to show how long the code has been running.
- **React_2** – a Like button component built with `React.createElement` and ES6 classes, loaded from the React CDN.
- **React_3** – a "Hello, World!" component written in JSX and compiled in the browser with Babel.
- **my-app** – a project bootstrapped with Create React App (React 19) that includes the standard `src` structure, test setup, and npm scripts.

**Folder:** `React_Projects`

### jQuery Classic Cars

A page built to practice jQuery events and effects. It features an animated shine effect on the header using chained `animate()` calls, a header that shrinks on scroll, images that slide in and out one after another on mouse enter and leave, and an FAQ section where each question toggles its answer open and closed.

**Folder:** `jQuery`

### jQuery Challenge

A short exercise demonstrating jQuery fundamentals: binding a click handler with `.on()` that keeps a running count of clicks, and using `.slideToggle()` to show and hide a content box.

**Folder:** `jQuery-challenge`

### AJAX Basics

An introduction to asynchronous requests using `XMLHttpRequest`. A sign-up form sends a GET request to a local file and, once the response is received, displays a personalized thank-you message and loads new content into the page without a refresh.

**Folder:** `AJAX`

### Challenges

Four quick exercises, each on its own page, covering data handling and browser events:

- **JSON.stringify()** – converts a JavaScript object into a pretty-printed JSON string.
- **JSON.parse()** – converts a JSON string back into a JavaScript object and displays its properties.
- **localStorage** – stores, retrieves, and displays a value from the browser's local storage.
- **ondblclick** – fires an alert when a paragraph is double-clicked.

**Folder:** `Challenges`

### Advanced JavaScript Projects

A set of exercises covering more advanced DOM and browser features:

- **Favorite Sport** – uses a `switch` statement to respond to user input and draws a gradient on an HTML `<canvas>`.
- **HTML Forms** – validates that required form fields are filled out before submission.
- **Characters** – reads custom `data-*` attributes from clicked elements to display player information.
- **Calculator** – the 4-function calculator described above.

**Folder:** `Advanced JavaScript Projects`

### Basic JavaScript Projects

Ten small projects, each focused on a core JavaScript concept:

1. Expressions and alerts
2. Functions
3. Math operators
4. Dictionaries (objects)
5. Comparisons and type coercion
6. Ternary operators and constructors
7. Scope and time functions
8. String methods
9. Countdown timer and slideshow
10. Loops and arrays

A `misc` folder also contains a mood-selector exercise using conditional statements.

**Folder:** `Basic JavaScript Projects`

### Console & Debugging Exercises

Practice files for running JavaScript directly in the browser console and using the developer tools to step through and debug code.

**Files:** `console_to_debug_code_video`, `running-javascript-in -the-console.html`

### Misc

Small one-off HTML examples, such as a demonstration of the horizontal rule (`<hr>`) tag.

**Folder:** `Misc`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- Bootstrap 5
- React
- AJAX / XMLHttpRequest
- Fetch API / REST APIs
- JSON and localStorage

## How to Run

Most projects require no build tools or installation. Clone the repository and open any project's `.html` file in a web browser:

```bash
git clone https://github.com/huntersoto/JAVASCRIPT-PROJECTS.git
```

The Create React App project is the one exception. To run it locally:

```bash
cd React_Projects/my-app
npm install
npm start
```

## Author

**Hunter Soto** – [GitHub](https://github.com/huntersoto)