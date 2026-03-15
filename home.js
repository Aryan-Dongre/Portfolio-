const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});


/* 
THEME TOGGLE */

const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".icon");

/* Load saved theme */

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light-mode");

icon.textContent="☀️";

}

/* Toggle theme */

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

icon.textContent="☀️";

localStorage.setItem("theme","light");

}

else{

icon.textContent="🌙";

localStorage.setItem("theme","dark");

}

});

/* SCROLL TITLE ANIMATION */

/* SCROLL ANIMATION MULTIPLE TIMES */

const animatedElements = document.querySelectorAll(
".animate-title, .fade-in, .project-img"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}
else{

entry.target.classList.remove("show");

}

});

}, { threshold: 0.3 });

animatedElements.forEach(el => {

observer.observe(el);

});