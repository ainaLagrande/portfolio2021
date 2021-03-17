'use strict';

//*********************APPARITION HOMAPAGE*******************
const tl = gsap.timeline({defaults:{ ease: "power1.out"}});

tl.to(".text", { y:"0%", duration: 1, stagger:0.25 });
tl.to(".slider", { y: "-100%", duration:1.5, delay:0.5 });
tl.to(".intro", { y: "-100%", duration:1 },"-=1.5");




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


// ********** SKILS ANIMATION ****************

window.onload = function(){
	let cube = document.getElementById('box-container');
	let position = 0;
	// the move variable sets the interval for how often the animateCube function should run. Currently set to every 10 miliseconds
	let move = setInterval(animateCube, 10)
	function animateCube(){
	  position += .2; // increments the position for how much the cube should rotate
	  let rotateX = 'rotateX(' + position + 'deg)'; // increments the X position
	  let rotateY = 'rotateY(' + position + 'deg)'; // increments the Y position
	  cube.style.transform = rotateX + " " + rotateY; // selects the elements css & updates
	}
  }
  



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


