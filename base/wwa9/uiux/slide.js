window.onload = function() { //자바스크립트 실행
    const s1 = new Swiper('.swiper', { //s1로 이름설정
        // Optional parameters
        // direction: 'vertical', //수직 수평
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination', //pagination ''값 페이지 표시줄
            clickable: true, //클릭시 그페이지로 이동
            renderBullet: function(index, className) {
                return '<div class="' + className + '">' + (index + 1) + "</div>"; //bullet에 글씨 넣기
            }
        },

        // 슬라이더 자동 이동
        autoplay: {
            delay: 2000,  //시간이 지나면(delay: '') 이동
        },
        
        mousewheel: true, //마우스 휠로 슬라이더 이동

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};
