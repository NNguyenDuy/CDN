var swiper =  new Swiper(".slider-main", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-next-main",
        prevEl: ".button-prev-main",
    },
    breakpoints: {
        1280: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-explore", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination.style1",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-explore2", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination.style1",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-testimonial", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination.style2",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-post", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".slider-service", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});