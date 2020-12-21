const nav = document.querySelector(".nav");
const humMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close");
//Select the back to top button:
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

// Gsap


var tl = gsap.timeline();
tl.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  delay: 0.5,
  ease: "power1",
});
tl.from(".hero p", { opacity: 0, y: 50, duration: 0.5, ease: "power1" });
tl.from(".hero .btn", { opacity: 0, y: 50, duration: 0.5, ease: "power1" });

gsap.from(".one", {
  scrollTrigger: ".about", 
  x: -300,
  duration: 2.5,
  delay: 0.5,
  ease: "power1",
});
gsap.from(".three", {
  scrollTrigger: ".about", 
  y: 50,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  ease: "power1",
});

gsap.from(".two", {
  scrollTrigger: ".two", 
  x: 300,
  duration: 2.5,
  delay: 0.5,
  ease: "power1",
});
gsap.from(".four", {
  scrollTrigger: ".four", 
  y: 50,
  opacity: 0,
  duration: 2.5,
  delay: 0.5,
  ease: "power1",
});

let yol = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
  },
});


yol.from(".services h2", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  ease: "power1",
});
yol.from(".serv-p", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  ease: "power1",
});
yol.from(".service-item.left", {
  opacity: 0,
  duration: 0.5,
});
yol.from(".service-item.right", {
  opacity: 0,
  duration: 0.5,
});
yol.from(".service-item.center", {
  opacity: 0,
  duration: 0.5,
});

gsap.from(".left-list li", {
  scrollTrigger: ".presentation", 
  x: -100,
  opacity: 0,
  duration: 3,
  delay: 0.5,
  ease: "power1",
});
gsap.from(".right-list li", {
  scrollTrigger: ".presentation", 
  x: -100,
  opacity: 0,
  duration: 3,
  ease: "power1",
});
