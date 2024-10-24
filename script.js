function navigateToNewPage() {
    // Replace 'newpage.html' with the path of the page you want to navigate to
    window.location.href = '/games/index.html';
}

const prompts = [
    "Welcome to the Comet Games!",
    "Join our discord, please?",
    "The home of gaming",
    "Join our discord, (again)",
    "Ice cream more like, nevermind just go play games."
];

// Generate a random index
const randomIndex = Math.floor(Math.random() * prompts.length);

// Set the h1 content to the selected random prompt
document.getElementById('randomPrompt').innerText = prompts[randomIndex];