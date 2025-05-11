// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

// Run this code when the page loads
window.onload = function () {
    alert("Welcome to my Chess Final Project with JavaScript!");
    console.log("CSS + JavaScript is powerful!");

    const colors = ["#fff9f7", "#fefff7", "#f7fff7"];
    console.log("The first color in the array is:", colors[0]);

    const userNamePrompt = getCookie("name");
    const colorChoicePrompt = getCookie("color");

    if (!userNamePrompt || !colorChoicePrompt) {
        const userName = prompt("What is your name?");
        const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");
        document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
        document.cookie = `color=${colorChoice}; max-age=${60 * 60 * 24 * 7}; path=/`;
        document.body.style.backgroundColor = colors[colorChoice];
    } else {
        document.body.style.backgroundColor = colors[colorChoicePrompt];
    }

    const userName = getCookie("name");
    const userTheme = getCookie("theme");

    if (!userTheme) {
        const themePref = prompt("Do you prefer dark or light theme?").toLowerCase();
        document.cookie = `theme=${themePref}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }

    const finalTheme = getCookie("theme");
    if (finalTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    const welcome = document.getElementById("welcome-message");
    if (welcome && userName) {
        welcome.textContent = `Welcome back, ${userName}`;
    }
};

// Check and retrieve cookie values
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}
