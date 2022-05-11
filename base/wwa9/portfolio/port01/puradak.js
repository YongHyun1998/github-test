window.onload = function() { //자바스크립트 실행

    //모바일 클릭이벤트
    $(".mob-bug").click(function() {
        $("html, body").toggleClass("on");
        $(".mobile-nav").toggleClass("on");
        // console.log($(".bg-shadow").css("display"));
        if ($(".bg-shadow").css("display") == "block") {
            $(".bg-shadow").css("display", "none");
        } else {
            $(".bg-shadow").css("display", "block");
        }
    }); 

    $(".bg-shadow").click(function() {
        $("html, body").removeClass("on");
        $(".mobile-nav").removeClass("on");
        $(".bg-shadow").css("display", "none");
    })

    
    $(".mob-menu > li").click(function() {
        $(".mob-menu1, .mob-menu2, .mob-menu3").removeClass("on");
    })

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

    const s3 = new Swiper('.swiper_mob', { //s3로 이름설정
        
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
    
    $(window).scroll(function() {
        var bottomOfViewport = window.scrollY + window.innerHeight;
        // console.log(window.scrollY + ":" + window.innerHeight + ":" + $('#footer').offset().top);
        // var bottomOfViewport = 창.스크롤세로값 + 창.내부높이;
        if(bottomOfViewport >= $('#footer').offset().top) {
            $('#quick_btm').addClass('on');
        } else {
            $('#quick_btm').removeClass('on');
        }
    });
    
};
