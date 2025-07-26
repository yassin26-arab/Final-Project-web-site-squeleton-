// Select the element with class "menu-btn" (usually the hamburger/menu button)
const menuBtn = document.querySelector('.menu-btn');

// Select the navigation menu element with class "main-nav"
const nav = document.querySelector('.main-nav');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the class "show" on the navigation menu
  // This typically shows or hides the menu when the button is clicked
  nav.classList.toggle('show');
});
