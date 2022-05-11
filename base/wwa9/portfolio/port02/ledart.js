const nav = document.getElementsByClassName("header-fixed");

window.onscroll = function sticky() {
    if(window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add("header-scroll");
    } else {
    nav[0].classList.remove("header-scroll");
    }
}

$(document).ready(function() {
    // .global클릭시 global-hide Class제거 후 새 Class생성
    // console.log($(".global"));
    $(".global").click(function() {
        $(this).next("ul").toggleClass("global-hide");
    });

    // 스크롤효과 100이동시 fadein&out , up&down클릭시 제일 상단 & 제일 하단 이동
    // hide #up-down first
    $("#up-down").hide();
    // fade in & fade Out #up-down
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#up-down').fadeIn(300);
            } else {
                $('#up-down').fadeOut(300);
            }
        });

        // scroll body to 0px on click : 제일 상단
        $('#getBackTop_up').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            // return false;
        });

        // scroll body to $(document).height() on click : 제일 하단
        $('#getBackTop_dn').click(function () {
            $('html,body').animate({
                scrollTop: $(document).height()
            }, 700);
            // return false;
        });
    });

});


window.onload = function() {
    AOS.init();
}
