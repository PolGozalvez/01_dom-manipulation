// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
let elementTitle = document.getElementById("mainTitle");
console.log(elementTitle);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let elementContent = document.getElementsById("content");
elementContent.innerHTML = "<p>Updated Content</p>";

// EXERCISE 3: Changing CSS Styles
// Change the background color of the element with the ID 'content' to 'lightgreen'.
let elementBackground = document.getElementById("content");
elementBackground.style.backgroundColor = "lightgreen";