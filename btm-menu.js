const menuMobile = document.querySelector(".MenuMobile");
// const btmMenuAbrir = document.querySelector(".btmMenu_abrir");
// const btmMenuFechar = document.querySelector(".btnMenu_fechar");
let isMenuOpen = false;

const buttonMenu = document.querySelector(".botao-menu");

function mostrarMenu() {
  isMenuOpen
    ? menuMobile.classList.add("invisible")
    : menuMobile.classList.remove("invisible");

  isMenuOpen
    ? buttonMenu.children[0].setAttribute("src", "../assets/icons/menu.svg")
    : buttonMenu.children[0].setAttribute("src", "../assets/icons/close.svg");

  isMenuOpen = !isMenuOpen;
  console.log(isMenuOpen);
}

function esconderMenu() {
  menuMobile.classList.add("invisible");
}
