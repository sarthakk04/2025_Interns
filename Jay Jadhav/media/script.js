// Ensure correct selectors
const hamburger = document.querySelector('.fa-solid.fa-bars');
const links = document.querySelector('.links');

if (hamburger && links) { // Check if both elements exist to avoid errors
    hamburger.addEventListener("click", () => {
        // Toggle the active class for the menu
        links.classList.toggle('ham_active');

        // Update the icon based on the menu state
        if (links.classList.contains('ham_active')) {
            hamburger.classList.replace('fa-bars', 'fa-xmark');
        } else {
            hamburger.classList.replace('fa-xmark', 'fa-bars');
        }
    });
} else {
    console.error("Could not find '.fa-solid.fa-bars' or '.links' in the DOM.");
}
