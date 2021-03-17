//*******SKILLS PROGRESS BAR************

//************************* HTML ******************
let progressBarHTML = document.querySelector(".myBarHTML");
let widthHTML = 0;


function progressBarHTMLMove() {
  progressBarHTML.style.width = `${widthHTML}%`;
  if (widthHTML < 75) {
    widthHTML++;
    requestAnimationFrame(progressBarHTMLMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthHTML < 75) {
    progressBarHTMLMove();
  }
});
//************************* CSS ******************

let progressBarCSS = document.querySelector(".myBarCSS");
let widthCSS = 0;

function progressBarCSSMove() {
  progressBarCSS.style.width = `${widthCSS}%`;
  if (widthCSS < 80) {
    widthCSS++;
    requestAnimationFrame(progressBarCSSMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthCSS < 75) {
    progressBarCSSMove();
  }
});

//************************* JS ******************

let progressBarJS = document.querySelector(".myBarJS");
let widthJS = 0;

function progressBarJSMove() {
  progressBarJS.style.width = `${widthJS}%`;
  if (widthJS < 40) {
    widthJS++;
    requestAnimationFrame(progressBarJSMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthJS < 70) {
    progressBarJSMove();
  }
});

//************************* PHP ******************

let progressBarPHP = document.querySelector(".myBarPHP");
let widthPHP = 0;

function progressBarPHPMove() {
  progressBarPHP.style.width = `${widthPHP}%`;
  if (widthPHP < 35) {
    widthPHP++;
    requestAnimationFrame(progressBarPHPMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthPHP < 70) {
    progressBarPHPMove();
  }
});

//************************* SQL ******************

let progressBarSQL = document.querySelector(".myBarSQL");
let widthSQL = 0;

function progressBarSQLMove() {
  progressBarSQL.style.width = `${widthSQL}%`;
  if (widthSQL < 50) {
    widthSQL++;
    requestAnimationFrame(progressBarSQLMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthSQL < 70) {
    progressBarSQLMove();
  }
});

//************************* GIT ******************

let progressBarGIT = document.querySelector(".myBarGIT");
let widthGIT = 0;

function progressBarGITMove() {
  progressBarGIT.style.width = `${widthGIT}%`;
  if (widthGIT< 60) {
    widthGIT++;
    requestAnimationFrame(progressBarGITMove);
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && widthGIT < 70) {
    progressBarGITMove();
  }
});