// ACTIVATE STRICT MODE
"use strict";

// ------------------------------

const hero = document.getElementById("hero");
const navBar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const topBun = document.getElementById("top");
const meatBun = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const listThree = document.getElementById("listThree");
const listFour = document.getElementById("listFour");
const sectionCars = document.getElementById("section-cars");

// ------------------------------

function navOpen() {
  navBar.classList.toggle("showNav");
  listOne.classList.toggle("slideLeft-One");
  listTwo.classList.toggle("slideLeft-Two");
  listThree.classList.toggle("slideLeft-Three");
  listFour.classList.toggle("slideLeft-Four");
  topBun.classList.toggle("topbun-change"); //ROTATE TOP LINE
  meatBun.classList.toggle("middle-change"); //ROTATE MIDDLE LINE
  bottomBun.classList.toggle("bottombun-change"); //ROTATE BOTTOM LINE
}

// CLICK TO SHOW NAV MENU AND ANIMATIONS ----

burger.addEventListener("click", navOpen);

// BURGER MENU MOVE ON SCROLL ----

window.addEventListener("scroll", () => {
  burger.classList.toggle("sticky", window.scrollY > 200);
});

// MAIN CARDS SLIDE IN ON SCROLL ----

const boxOne = document.getElementById("box1");
const boxTwo = document.getElementById("box2");
const boxThree = document.getElementById("box3");
const boxIcons = document.querySelectorAll(".ad-img");

window.addEventListener("scroll", () => {
  boxOne.classList.toggle("cardSlide", window.scrollY > 300);
  boxTwo.classList.toggle("cardSlide", window.scrollY > 300);
  boxThree.classList.toggle("cardSlide", window.scrollY > 300);
  boxIcons.forEach((element) => {
    element.classList.toggle("opacitySlideIn", window.scrollY > 300);
  });
});

// VIDEO SECTION APPEAR ON SCROLL ----

const sectionVideo = document.getElementById("section-video");

window.addEventListener("scroll", () => {
  sectionVideo.classList.toggle(
    "videoShow",
    window.scrollY > sectionCars.scrollHeight
  );
});
