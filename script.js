/* Mobile menu opening */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* Nav-item collapsible */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/* Swiper slider config  */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false
    },
});