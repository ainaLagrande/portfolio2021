// 'use strict';

// // *********************SUBMENU
// function subMenu()
// {
//   let subMenu = document.querySelector('.sub-menu');

//   if (subMenu.style.display === "none")
//   {
//     subMenu.style.display = "block";
//   }
//   else
//   {
//     subMenu.style.display = "none";
//   }
// }



// //***********TEXT SCROLL

// let line1 = document.querySelector('.line-1');
// let line2 = document.querySelector('.line-2');

// window.onscroll = () => {//au scroll on fait une fonction
//    let pos = window.scrollY;
//    line1.style.left = -pos * 0.5 +"px"; //a chaque fois ca rajoute un pixel
//    line2.style.left = pos * 0.5 +"px";
// }


// ********IMG ROTATE 


window.onscroll = function() {
  let img2 = document.querySelector('.imgRotate2');

  if(document.documentElement.scrollTop >=500) {

    img2.classList.add('imgRotate2JS'); 
  }
  // else (document.documentElement.scrollTop >=500)  {
  //   img2.classList.add('imgRotate2JS'); 
  // }

}
