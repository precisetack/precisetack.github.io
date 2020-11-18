

const hamburger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navlink');

hamburger.addEventListener('click', () => {
	navbar.classList.toggle('open');
});

var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

var tm = new Date();
document.getElementById("time").innerHTML = tm.toLocaleTimeString();


const images = document.querySelectorAll('main img');
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");
const close = document.querySelector(".close");

images.forEach((image) =>{
  image.addEventListener("click", () => {
      fullImg.src = image.src;
      modal.classList.add("appear");

      close.addEventListener("click", () => {
        modal.classList.remove("appear");
      });
  });
});