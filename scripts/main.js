const menuButton = document.getElementById("menu-button"),
      menu = document.getElementById("menu")

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("open")
    menu.classList.toggle("show")
})