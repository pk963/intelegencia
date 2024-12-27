$('.partnership-Carousel').owlCarousel({
    loop: true,
    margin: 50,
    items: 5,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: true
        }
    }
})

$('.client-Carousel').owlCarousel({
    loop: true,
    items: 1,
    responsiveClass: true,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']
})