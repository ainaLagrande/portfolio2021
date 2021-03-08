// 'use strict';

// // *********************SUBMENU
function subMenu()
{
  let subMenu = document.querySelector('.sub-menu');

  if (subMenu.style.display === "block")
  {
    subMenu.style.display = "none";
  }
  else
  {
    subMenu.style.display = "block";
  }
}

// ***********TEXT SCROLL

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

window.onscroll = () => {//au scroll on fait une fonction
   let pos = window.scrollY;
   line1.style.left = -pos * 0.7 +"px"; //a chaque fois ca rajoute un pixel
   line2.style.left = pos * 0.7 +"px";
}


// ***********BIRDTH SECTION**********************

const threshold = .1
const options = {
	root:null,
	rootMargin:'0px',//a partir de combien de marges faut il depasser pour etre visible
	threshold//a partir de 10% d'element on commence a faire apparaitre lelement
}

const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
	  if (entry.intersectionRatio > threshold) {
			entry.target.classList.add('reveal-visible');
			observer.unobserve(entry.target);
		} 
	});
}
const observer = new IntersectionObserver(handleIntersect ,options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){

	observer.observe(r)

})



//***** IMG1 ROTATE 

window.addEventListener('scroll', ()=>{
	let img1 = document.querySelector('.imgRotate1'); 
	  if(window.scrollY<=700){ 
		  img1.style.transform='rotate(-15deg)';
	  }
	  else if(window.scrollY>=1600)
	  {
		  img1.style.transform='rotate(0deg)';
  
	  }
  });
// //***** IMG2 ROTATE 

window.addEventListener('scroll', ()=>{
	let img2 = document.querySelector('.imgRotate2'); 
	  if(window.scrollY<=700){ 
		  img2.style.transform='rotate(15deg)';
		//   console.log(window.scrollY);
	  }
	  else if(window.scrollY>=1480)
	  {
		  img2.style.transform='rotate(0deg)';
  
	  }
  });

// //***** IMG3 ROTATE 

  window.addEventListener('scroll', ()=>{
	let img3 = document.querySelector('.imgRotate3'); 
	  if(window.scrollY<=700){ 
		  img3.style.transform='rotate(-40deg)';
	  }
	  else if(window.scrollY>=1800)
	  {
		  img3.style.transform='rotate(0deg)';
  
	  }
  });

//**********AUTO TEXT
const txtAnime=document.getElementById("autotext");

new Typewriter (txtAnime,{
	deleteSpeed:10
})
.typeString("Bon, Tu as compris ça c'est moi")
.pauseFor(100)
.start()


// **********PARALLAX 

document.addEventListener("mousemove" ,parallax);

function parallax(e){
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x =(window.innerWidth -e.pageX*speed)/100;
		const y =(window.innerHeight -e.pageY*speed)/100;

		layer.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

	});
};


















// 	window.addEventListener('DOMContentLoaded', function (e) {
// 	e.preventDefault();
// 	let resultTxt = document.getElementById('result');
// 	let pos = 0; 
// 	let scroll = setInterval(frame,1);

// 	document.write("<p>TEXT /p>");





//     function frame() {
//         if (pos === 1280) {
//             pos = 0;
//         } 
// 		else {
// 			pos++;
//             resultTxt.style.left = pos + "px";
//         }
//     }
// })
