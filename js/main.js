// swiper js
var swiper = new Swiper(".popular-content", {
    spaceBetween: 30,
    centeredSlides: True,
    autoplay: {
        delay: 250,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}) 