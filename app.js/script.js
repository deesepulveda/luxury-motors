// ACTIVATE STRICT MODE
"use strict";

const navBar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const topBun = document.getElementById("top");
const meatBun = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const listThree = document.getElementById("listThree");
const listFour = document.getElementById("listFour");

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
  burger.classList.toggle("sticky", window.scrollY > 430);
});
