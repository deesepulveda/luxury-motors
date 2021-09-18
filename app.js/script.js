// ACTIVATE STRICT MODE
"use strict";

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
const sectionVideo = document.getElementById("section-video");
const mainImgBox1 = document.getElementById("main-img-box1");
const titleMain = document.getElementById("title-main");

// CLICK TO SHOW NAV MENU AND ANIMATIONS ----

burger.addEventListener("click", () => {
  navBar.classList.toggle("showNav");
  listOne.classList.toggle("slideLeft-One");
  listTwo.classList.toggle("slideLeft-Two");
  listThree.classList.toggle("slideLeft-Three");
  listFour.classList.toggle("slideLeft-Four");
  topBun.classList.toggle("topbun-change"); //ROTATE TOP LINE
  meatBun.classList.toggle("middle-change"); //ROTATE MIDDLE LINE
  bottomBun.classList.toggle("bottombun-change"); //ROTATE BOTTOM LINE
});

// BURGER MENU MOVE ON SCROLL ----

window.addEventListener("scroll", () => {
  burger.classList.toggle("sticky", window.scrollY > 200);
});

// VIDEO SECTION APPEAR ON SCROLL ----

window.addEventListener("scroll", () => {
  sectionVideo.classList.toggle(
    "videoShow",
    window.scrollY > sectionCars.scrollHeight
  );
});
