//***********  MOBIL MENU ***********

let toggle = document.querySelector('.toggle'),
    button = document.querySelector('.btn_menu'),
    nav = document.querySelector('nav');

button.addEventListener('click', () => {
  toggle.classList.toggle('active-toggle');
  nav.classList.toggle('openNav');
})

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