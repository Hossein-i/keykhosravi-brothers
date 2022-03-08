// open and close menu mobile
const menuButton = document.getElementById("menu-button"),
      menuMobile = document.getElementById("menu-mobile")

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("open")
    menuMobile.classList.toggle("show")
})