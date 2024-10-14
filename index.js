// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
let elementTitle = document.getElementById("mainTitle");
console.log(elementTitle);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let paragraphsContent = document.getElementsByTagName("p");
paragraphsContent[1].textContent = "This paragraph has been changed";

// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red.
let firtsListItemRed = document.querySelector('li');
firtsListItemRed.style.color = 'red';

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph.
let highlightParagraph = document.querySelector('p');
highlightParagraph.classList.add('highlight');
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds.
setTimeout(function() {
    highlightParagraph.classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list.
let newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';
let list = document.querySelector('ul');
list.appendChild(newListItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list.
let lastListItems = list.getElementsByTagName('li'); 
lastListItems[3].remove(); 

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
let elementButton = document.getElementById('actionButton');
elementButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div.
let inputField = document.getElementById('inputField');
let resultDiv = document.getElementById('result');
inputField.addEventListener('input', function(event) {
    resultDiv.textContent = event.target.value;
});

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div.
let buttonToggleVisbility = document.getElementById('actionButton'); 
let contentDiv = document.getElementById('content');
buttonToggleVisbility.addEventListener('click', function() { 
    if (contentDiv.style.display === 'none') { 
        contentDiv.style.display = 'block'; 
    } else {
        contentDiv.style.display = 'none';
    }
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name".
let inputElementPlaceholder = document.getElementById('inputField');
inputElementPlaceholder.setAttribute('placeholder', 'Enter your name');