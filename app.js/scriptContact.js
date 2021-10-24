// ACTIVATE STRICT MODE
"use strict";

// ------------------------------

const burgerOther = document.getElementById("burgerOther");

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

// BURGER MENU ON OTHER PAGES ----

burgerOther.addEventListener("click", navOpen);
