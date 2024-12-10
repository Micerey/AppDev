document.getElementById("dogButton").addEventListener("click", function() {
    window.location.href = "infectionsigns.html"; // Replace with your actual dog information page URL
});

document.getElementById("catButton").addEventListener("click", function() {
    window.location.href = "infectionsignsCat.html"; // Replace with your actual cat information page URL
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const infoContent = document.querySelector('.info-content');

leftArrow.addEventListener('click', () => {
    infoContent.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    infoContent.scrollBy({ left: 300, behavior: 'smooth' });
});

function toggleMenu() { 
    const menuItems = document.querySelector('.menu-items'); 
    menuItems.classList.toggle('show'); 
}