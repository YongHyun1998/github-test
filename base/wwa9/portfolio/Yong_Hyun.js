$(document).ready(function() {
    new TypeIt("#companionMethods", {
        speed: 60,
        waitUntilVisible: true,
    })
        .type("안녕하세요.", { delay: 200 })
        .break({ delay: 300 })
        .type("웹디자인,웹퍼블리셔", { delay: 200 })
        .move(-5)
        .delete(1)
        .type("&")
        .move(null, { to: "END" })
        .break({ delay: 300 })
        .type('<strong>김용현의 포트폴리오</strong>&nbsp;', {
            speed: 100,
        })
        .type(" 입니다.")
        .go();

    // #main으로 이동
    $('.nav1').click(function () {
        $('html,body').animate({
            scrollTop: $('#main').offset().top
        }, 1000);
    });
    // #About으로 이동
    $('.nav2').click(function () {
        $('html,body').animate({
            scrollTop: $('#About').offset().top
        }, 1000);
    });
    // #portfolio-web으로 이동
    $('.nav3').click(function () {
        $('html,body').animate({
            scrollTop: $('#portfolio-web').offset().top
        }, 1000);
    });
    // #Portfolio-Etc으로 이동
    $('.nav4').click(function () {
        $('html,body').animate({
            scrollTop: $('#Portfolio-Etc').offset().top
        }, 1000);
    });
    // #Contact으로 이동
    $('.nav5').click(function () {
        $('html,body').animate({
            scrollTop: $('#Contact').offset().top
        }, 1000);
    });
    // 스크롤 #About으로 이동
    $('.section6').click(function () {
        $('html,body').animate({
            scrollTop: $('#About').offset().top
        }, 800);
    });
    
});

$(window).on('scroll',function() {
    if ($(window).scrollTop()) {
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    } 
});
$(window).on('scroll', function(){
    if($(window).scrollTop() >= 500) {
        $('#header').addClass('active'); //클래스 추가
    } else { // 스크롤 올릴 때
        $('#header').removeClass('active'); //클래스 제거
    }
});

window.onload = function() {
    new Chart(document.getElementById("myChartOne").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [90, 10],
                backgroundColor: [
                    "#fc490b",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
            
        }
    });

    new Chart(document.getElementById("myChartTwo").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [90, 10],
                backgroundColor: [
                    "#2196f3",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
            
        }

    });
    
    new Chart(document.getElementById("myChartThree").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [75, 25],
                backgroundColor: [
                    "#ffda3e",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
            
        }
    });
    
    new Chart(document.getElementById("myChartFour").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [70, 30],
                backgroundColor: [
                    "#193556",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
            
        }
    });

    new Chart(document.getElementById("myChartFive").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [80, 20],
                backgroundColor: [
                    "#01b4dd",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
        }
    });

    new Chart(document.getElementById("myChartSix").getContext('2d'), {
        type: "doughnut", // 차트의 형태
        data: { //차트에 들어갈 데이터
            datasets: [{
                data: [85, 15],
                backgroundColor: [
                    "#ff7f18",
                    "white",
                ],
                borderWidth: 1, //경계선 굵기
                scaleBeginAtZero: true,
                hoverOffset: -10,
            }],
        },
        options: {
            responsive: false, //false시 원하는 크기로 수정
            cutout: "80%",
        }
    });
    // AOS 
    AOS.init();
}