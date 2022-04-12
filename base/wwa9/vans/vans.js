// main menu
$(function() {

  $("#gnb > li").mouseleave(function(e) {
    console.log(e.relatedTarget);
    if(e.relatedTarget.classList.contains("main-menu") || e.relatedTarget.classList.contains("menu")) {
      $(".top-after > div").trigger("mouseleave");
    }
  });
  
  $("#gnb > li").mouseenter(function() {
    var index = $(this).data("order");
    $("#gnb > li > span").css("display", "none");
    $(this).find("span").css("display", "block");
    $(".top-after > div").css("display", "none");
    $(".top-after > div").eq(index).css("display", "block");
  });
  $(".top-after").mouseleave(function() {
    $(".top-after > div").css("display", "none");
  });
});

// bottom slider
function FadeText(el, opt) {
  console.log(el);
  var el = document.querySelector(el);
  
  var arr = ["세상에 하나뿐인 나만의 신발", "오리지널 실루엣의 매력! 애너하임 팩토리", "샌디리앙 컬렉션 발매!"];
  var slides = [];
  var txts = "", now = 0;
  // el.style.position = 'relative';
  // el.style.height = '25px';
  arr.forEach(function(value, index) {
    txts += "<div>" + value + "</div>";
  });
  el.innerHTML = txts;
  el.childNodes.forEach(function(value, index) {
    slides.push(value);
    // value.style.position = "absolute";
    // value.style.top = 0;
    // value.style.backgroundColor = opt.bgColor;
    value.style.transition = opt.speed + 'ms';
    if (index) {
      value.style.opacity = 0;
    }
  });
  this.movePrev = function() {
    slides[now].style.opacity = 0;
    now -= 1;
    if (now <= 0) {
      now = slides.length - 1;
    }
    slides[now].style.opacity = 1;
  };
  this.moveNext = function() {
    slides[now].style.opacity = 0;
    now += 1;
    if (now >= slides.length) {
      now = 0;
    }
    slides[now].style.opacity = 1;
  };
  if (opt.prev) {
    var prev = document.querySelector(opt.prev);
    prev.onclick = this.movePrev;
  }
  if (opt.next) {
    var next = document.querySelector(opt.next);
    next.onclick = this.moveNext; 
  }
}

// swiper
window.onload = function() {
  var swiper = new Swiper('.swiper1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper1 .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper1 .swiper-button-next',
      prevEl: '.swiper1 .swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // swiper2
  var swiper = new Swiper('.swiper2', {
    // Optional parameters 
    slidesPerView: 4, //동시에 보여줄 슬라이드 갯수
    spaceBetween: 10, //슬라이더간 간격
    slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

    loop: false, //무한반복 x

    pagination: {
      el: '.swiper2 .swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.outnext1',
      prevEl: '.swiper-button-prev.outpre1',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper2 .swiper-scrollbar',
    },
  });

   // swiper3
  var swiper = new Swiper('.swiper3', {
    // Optional parameters 
    slidesPerView: 4, //동시에 보여줄 슬라이드 갯수
    spaceBetween: 10, //슬라이더간 간격
    slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

    loop: false, //무한반복 x

    pagination: {
      el: '.swiper3 .swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.outnext2',
      prevEl: '.swiper-button-prev.outpre2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper3 .swiper-scrollbar',
    },
  });
  var ft = new FadeText(".text", {
    prev: ".left",
    next: ".right",
    speed: 1000,
    // bgColor: '#fff'
  });
}
