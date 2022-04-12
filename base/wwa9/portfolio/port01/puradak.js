
//swiper
window.onload = function() { //자바스크립트 실행
    const s1 = new Swiper('.swiper1', { //s1로 이름설정
        loop: true,

        pagination: {
            el: '.swiper1 .swiper-pagination', //pagination ''값 페이지 표시줄
            clickable: true, //클릭시 그페이지로 이동
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper1 .swiper-button-next',
            prevEl: '.swiper1 .swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper1 .swiper-scrollbar',
        },
    });

    const s2 = new Swiper('.swiper2', { //s2로 이름설정
        slidesPerView: 4,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,

        pagination: {
            el: '.swiper2 .swiper-pagination', //pagination ''값 페이지 표시줄
            clickable: true, //클릭시 그페이지로 이동
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper2-nex.swiper-button-next',
            prevEl: '.swiper2-pre.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper2 .swiper-scrollbar',
        },
    });

    
};

