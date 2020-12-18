const nav = document.querySelector(".nav");
const humMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close");
//Get the back to top button:
const backTop = document.querySelector(".back-top");

humMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  humMenu.classList.toggle("active");
  closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  humMenu.classList.remove("active");
  closeMenu.classList.toggle("active");
});

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
};
