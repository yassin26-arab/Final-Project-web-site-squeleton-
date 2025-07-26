// Select the button element with the class "menu-btn"
const menuBtn = document.querySelector('.menu-btn');

// Select the navigation element with the class "main-nav"
const nav = document.querySelector('.main-nav');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the "show" class on the navigation element
  // This makes the navigation menu appear or disappear
  nav.classList.toggle('show');
});
