// Search Functionality
function searchConcepts() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const concepts = document.querySelectorAll('.concept');

    concepts.forEach((concept) => {
        const title = concept.querySelector('h2').textContent.toLowerCase();
        const content = concept.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || content.includes(input)) {
            concept.style.display = '';
        } else {
            concept.style.display = 'none';
        }
    });
}



// Add click event to all concepts
document.querySelectorAll('.concept').forEach(concept => {
    concept.addEventListener('click', () => {
        const title = concept.querySelector('h2').textContent;
        const details = concept.getAttribute('data-details');
        const link = concept.getAttribute('data-wikipedia');
        showPopup(title, details, link);
    });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();
