// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

// Run this code when the page loads
window.onload = function () {
    alert("Welcome to my Chess Midterm Project with JavaScript!");
    console.log("CSS + JavaScript is powerful!");

    const colors = ["#fff9f7", "#fefff7", "#f7fff7"];
    console.log("The first color in the array is:", colors[0]);

    const userName = prompt("What is your name?");
    const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

    const userInfo = {
        name: userName,
        selectedColor: colors[colorChoice]
    };
    document.body.style.backgroundColor = userInfo.selectedColor;
};
