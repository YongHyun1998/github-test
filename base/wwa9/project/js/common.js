$(function() {
	$.noConflict();

	var swiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: {
			delay: 5500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

	// var isOver1, isOver2;
	
	// $('.openAll1').on('mouseover focus', function() {
	// 	if (parseInt($('header').css('width')) > 800) {
	// 		$('.gnb_depth2_1').fadeIn('fast');
	// 		isOver1 = true;
	// 	}
	// });

	// $('.openAll1').on('mouseout', function() {
	// 	setTimeout(goHide1, 200);
	// 	isOver1 = false;
	// });
	// $('.gnb_depth2_1 li:last-child a').blur(function() {
	// 	isOver1 = false;
	// 	setTimeout(goHide1, 200);
	// });
	// $('.gnb_depth2_1').on('mouseover focus', function() {
	// 	isOver2 = true;
	// });
	// $('.gnb_depth2_1').on('mouseout blur', function() {
	// 	isOver2 = false;
	// 	setTimeout(goHide1, 200);
	// });

	// function goHide1() {
	// 	if (!isOver1 && !isOver2) {
	// 		$('.gnb_depth2_1').stop().fadeOut('fast');
	// 	}
	// }

	$('.gnb > li').on('mouseenter', function() {
		if (parseInt($('header').css('width')) > 800) {
			$(this).children('.gnb_depth').stop().fadeIn('fast');
		}
	}).on('mouseleave blur', function() {
		$(this).children('.gnb_depth').stop().fadeOut('fast');
	});
	$('.gnb > li > a').on('mouseenter focus', function() {
		if (parseInt($('header').css('width')) > 800) {
			$(this).parent().children('.gnb_depth').stop().fadeIn('fast');
		}
	});
	// .on('mouseleave blur', function() {
	// 	$(this).parent().children('.gnb_depth').stop().fadeOut('fast');
	// });
	var onBind = false;
	$('.openMOgnb').click(function() {
		$(this).toggleClass('active');
		$('header').toggleClass('on');

		$('header .header_cont').slideToggle('fast');
		//$('header .header_cont .closePop').show();
		if(onBind) {
			$('body').unbind('touchmove');	
		} else {
			$('body').bind('touchmove', function(e) {e.preventDefault()});	
		}
		onBind = !onBind;
	});

	function hideMOgnb(re) {
		$('.openMOgnb').removeClass('active');
		$('header').removeClass('on');
		
		$('header .header_cont').slideUp('fast');
		$('body').unbind('touchmove');
	}

	$('a.s_point').smoothScroll();
	showTop(); //로딩 후 실행

	function showTop() {
		if ($(document).scrollTop() < 50) {
			$('.to_top').addClass('hide');
		} else {
			$('.to_top').removeClass('hide');
		}
	}

	var oldScroll = 0;
	$(window).scroll(function(e) {
		var nowScroll = window.scrollY;

		showTop();
		hideMOgnb();

		//console.log(oldScroll + " : " + nowScroll);
		if (oldScroll < nowScroll) { //화면 내림
			$('header').css({
				top: '-113px'
			});
		} else { //화면 올림
			$('header').css({
				top: '0px'
			});
		}
		oldScroll = nowScroll <= 0 ? 0 : nowScroll;
	});

	$(window).resize(function() {
		hideMOgnb();
	});

	// window.addEventListener('wheel', function(e) {
	// 	//console.log(e.deltaY);
	// 	if (e.deltaY > 0) { //화면 내림
	// 		$('header').css({
	// 			position: 'fixed',
	// 			top: '-100px'
	// 		});
	// 	} else { //화면 올림
	// 		$('header').css({
	// 			position: 'fixed',
	// 			top: '0px'
	// 		});
	// 	}
	// });

});