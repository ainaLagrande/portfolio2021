'use strict';

//*********************APPARITION HOMAPAGE*******************
const tl = gsap.timeline({defaults:{ ease: "power1.out"}});

tl.to(".text", { y:"0%", duration: 1, stagger:0.25 });
tl.to(".slider", { y: "-100%", duration:1.5, delay:0.5 });
tl.to(".intro", { y: "-100%", duration:1 },"-=1.5");


// *********************SUBMENU*******************
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


// *********** REVEAL  SECTION**********************

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


// ********** SKILS PARALLAX ****************

document.addEventListener("mousemove" ,parallax);

function parallax(e){
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x =(window.innerWidth -e.pageX*speed)/100;
		const y =(window.innerHeight -e.pageY*speed)/100;

		layer.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

	});
};


// *************** FORM ANIMATION ****************


const input = document.querySelectorAll('.formLabel');


document.addEventListener('input', function(e) {
	
    if(e.target.value !== "") {
        e.target.parentNode.classList.add('activeInput');
    } 
    else if (e.target.value === "") {
        e.target.parentNode.classList.remove('activeInput');
    }
	
});





