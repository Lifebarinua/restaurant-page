import './style.css';
import loadPage from './pageLoad';
import loadMenu from './menu';
import loadContact from './contact';



import meatloafImage from './easy-meatloaf.jpeg';



document.body.style.backgroundImage = `url(${meatloafImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundAttachment = "fixed"; // optional: keeps it fixed while scrolling

function init() {
  // Load default home page
  loadPage();

  // Get nav items
  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const choice = e.target.textContent;

      if (choice === "Home") {
       location.reload();   // refresh page
      } else if (choice === "Menu") {
        loadMenu();
      } else if (choice === "Contact") {
        loadContact();
      }
    });
  });
}

init();