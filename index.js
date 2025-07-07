function togglemenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// ✅ Close when clicking outside
window.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".dropdown-toggle");

  // if clicked outside both menu and toggle button
  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#menu a");

  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      document.getElementById("menu").style.display = "none";
    });
  });
});


const slider = document.querySelector('.reviews-slot');
setInterval(() => {
  slider.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  if (slider.scrollLeft + window.innerWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 4000); // every 4 seconds

