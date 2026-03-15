/* VIEW MORE BUTTON */

function toggleProjects(){

let cards = document.querySelectorAll(".extra-card");
let btn = document.getElementById("viewMoreBtn");

cards.forEach(card => {

if(card.style.display === "block"){
card.style.display = "none";
btn.innerText = "View More";
}

else{
card.style.display = "block";
btn.innerText = "View Less";
}

});

}


/* THEME TOGGLE */

const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".icon");

/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
icon.textContent="☀️";
}

/* CLICK EVENT */

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