// open and close menu mobile
const menuButton = document.getElementById("menu-button"),
      menuMobile = document.getElementById("menu-mobile")

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("open")
    menuMobile.classList.toggle("show")
})
// slideshow
let slides = document.getElementsByClassName("slideshow__slide"),
    dots = document.querySelectorAll(".slideshow__pagination span"),
    slideIndex = 1

showSlides(slideIndex)
autoSlides()

const navSlides = (n) => showSlides(slideIndex += n)
const currentSlides = (n) => showSlides(slideIndex = n)

function showSlides(n) {
    n > slides.length ? slideIndex = 1 : null
    n < 1 ? slideIndex = slides.length : null

    for (const slide of slides) slide.style.display = "none"
    for (const dot of dots) dot.classList.remove("active")
    
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].classList.add("active")
}
function autoSlides() {
    for (const slide of slides) slide.style.display = "none"
    for (const dot of dots) dot.classList.remove("active")

    slideIndex++
    slideIndex > slides.length ? slideIndex = 1 : null

    slides[slideIndex-1].style.display = "block"    
    dots[slideIndex-1].classList.add("active")

    setTimeout(autoSlides, 5000)
}