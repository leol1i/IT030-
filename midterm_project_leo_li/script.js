// Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// Show an alert message when the page loads
window.onload = function () {
    alert("Welcome to Assignment 5 with JavaScript!");
};

// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

const colors = ["#fff9f7", "#fefff7", "#f7fff7"];
console.log("The first color in the array is:", colors[0]);

const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};
document.body.style.backgroundColor = userInfo.selectedColor;
