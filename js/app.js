// *********************SUBMENU
function subMenu()
{
  let subMenu = document.querySelector('.sub-menu');

  if (subMenu.style.display === "none")
  {
    subMenu.style.display = "block";
  }
  else
  {
    subMenu.style.display = "none";
  }
}


// ******************STALK EYES

 let balls=document.getElementsByClassName("ball");

 document.onmousemove =function()
{
	 let x =event.clientX * 100 /window.innerWidth + "%";
	 let y =event.clientY * 100 /window.innerHeight + "%";


for (let i=0; i<2; i++)
{
	balls[i].style.left=x;
	balls[i].style.top=y;
	balls[i].style.transform=
	"translate(-" + x + ",-" + y + ")";
}

    console.log("x =" + x);
    console.log("y = " + y);
}


//********************** */ SLIDE IMG
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}