const filterWords = ["힙X", "힙x", "힙X)", "힙x)"];

function filterPosts() {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
        const text = row.textContent;
        for (let i = 0; i < filterWords.length; i++) {
            const word = filterWords[i];
            if (text.includes(word)) {
                row.style.display = 'none';
                return;
            }
        }
    });
}

filterPosts();
