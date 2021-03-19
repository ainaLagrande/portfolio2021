'use strict';

// ***********TEXT SCROLL*********************

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

function textScroll(){
    let pos = window.scrollY;
    line1.style.left = -pos * 0.7 +"px";
    line2.style.left = pos * 0.7 +"px";
}

//**********AUTO TEXT********************
const txtAnime = document.getElementById("autotext");

new Typewriter (txtAnime,{
	deleteSpeed:10
})
.typeString("Bon, Tu as compris ça c'est moi")
.pauseFor(100)
.start()

//*********** TEXT ROTATION ONSCROLL *********

window.onscroll = function(){
    scrollRotate();
    textScroll()
  };
  
  function scrollRotate(){
    
    let backImg = document.querySelector('.back-img');
    backImg.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
  }
  scrollRotate();
  