// Toggle details for Chef Mohamed
function toggleDetails() {
  const details = document.getElementById("details");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Toggle main nav menu (responsive)
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.main-nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});