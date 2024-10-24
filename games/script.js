document.getElementById('searchBar').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const text = box.querySelector('span').textContent.toLowerCase();
        if (text.includes(filter)) {
            box.style.display = ''; // Show the box
        } else {
            box.style.display = 'none'; // Hide the box
        }
    });
});

function openGame(game) {
    // Redirect to the iframe page with the game as a query parameter
    window.location.href = `/player/index.html?game=${game}`;
}
function filterGames() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const boxesContainer = document.getElementById('boxesContainer');
    const boxes = boxesContainer.getElementsByClassName('box');

    let hasMatches = false;

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const text = box.textContent.toLowerCase();
        
        if (text.includes(searchValue) && searchValue) {
            box.style.display = 'block';
            hasMatches = true;
        } else {
            box.style.display = 'none';
        }
    }

    // Hide the search box if no matches found
    if (!hasMatches) {
        boxesContainer.style.display = 'none';
    } else {
        boxesContainer.style.display = 'flex';
    }
}