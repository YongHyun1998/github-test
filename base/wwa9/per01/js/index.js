function getRandom(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

var movieLists = [
	{
		url: "https://adimg.cgv.co.kr/images/202202/Nightmare/Nightmare_1080x608_0223.mp4",
		title: "나이트메어 앨리",
		sub1: "2022년 아카데미 시상식 작품상 후보",
		sub2: "기예르모 델 토로 감독 신작"
	},
	{
		url: "https://adimg.cgv.co.kr/images/202202/THEPEOPLE/THEPEOPLE_1080x608_0223.mp4",
		title: "인민을 위해 복무하라.",
		sub1: "<색,계>보다 치명적이고",
		sub2: "<화양연화>보다 아름답다"
	},
	{
		url: "https://adimg.cgv.co.kr/images/202202/Antebellum/Antebellum_1080x608_0223.mp4",
		title: "안테벨룸",
		sub1: "<겟 아우>, <어스>  제작진의",
		sub2: "미스터리 충격 스릴러"
	},
];

var movieChartList = [
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85632/85632_320.jpg",
		title:"더 베트맨",
		age: 12,
		day: 10,
		view: 86,
		reserv: 62.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85693/85693_320.jpg",
		title:"BTS PERMISSION TO DANCE ON STAGE - SEOUL: LIVE VIEWING",
		age: 5,
		day: 20,
		view: 82,
		reserv: 61.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85603/85603_320.jpg",
		title:"극장판 주술회전",
		age: 12,
		day: 0,
		view: 86,
		reserv: 62.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85624/85624_320.jpg",
		title:"언차티드",
		age: 12,
		day: 10,
		view: 86,
		reserv: 62.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85581/85581_320.jpg",
		title:"안테벨룸",
		age: 12,
		day: 10,
		view: 86,
		reserv: 62.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85680/85680_320.jpg",
		title:"에이핑크 스페셜 무비",
		age: 12,
		day: 10,
		view: 86,
		reserv: 62.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85664/85664_320.jpg",
		title:"라이트 레이더스",
		age: 12,
		day: 10,
		view: 96,
		reserv: 32.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85652/85652_320.jpg",
		title:"나이트메어 엘리",
		age: 12,
		day: 10,
		view: 26,
		reserv: 72.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85582/85582_320.jpg",
		title:"피그",
		age: 12,
		day: 10,
		view: 46,
		reserv: 52.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85635/85635_320.jpg",
		title:"인민을위해 복무하라",
		age: 12,
		day: 10,
		view: 16,
		reserv: 32.8
	},{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85652/85652_320.jpg",
		title:"나이트메어 엘리",
		age: 12,
		day: 10,
		view: 26,
		reserv: 72.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85582/85582_320.jpg",
		title:"피그",
		age: 12,
		day: 10,
		view: 46,
		reserv: 52.8
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85635/85635_320.jpg",
		title:"인민을위해 복무하라",
		age: 12,
		day: 10,
		view: 16,
		reserv: 32.8
	}
];

//window onload 이벤트
window.onload = function(e) {
	var topAdImg = document.getElementById("topAdImg");
	var topAd = document.getElementsByClassName("top-ad")[0];
	var adts = document.getElementsByClassName("adt");
	var topAdLink = document.getElementById("topAdLink");
	var topAdCloser = document.getElementById('top-ad-closer');

	var movieSearch = document.getElementById("movieSearch");
	var txtSearch = document.getElementById("txtSearch");
	var btnSearSubmit = document.getElementById("btnSearSubmit");

	var headerBottom = document.querySelector(".header-bottom");
	var mainGnbMenuList = document.querySelectorAll(".main-gnb > li");
	var submenu = document.querySelector(".submenu");

	var mv = document.querySelector("#mv");
	var source = document.querySelector("#mv > source");
	var mtitle = document.querySelector(".mtitle");
	var stitle = document.querySelectorAll(".stitle");
	var play = document.querySelector(".mdetail > div:nth-child(2)");
	var iPlay = document.querySelector(".mdetail > div:nth-child(2) > i");
	var mute = document.querySelector(".mdetail > div:nth-child(3)");
	var iMute = document.querySelector(".mdetail > div:nth-child(3) > i");

	var btnMovieChart = document.getElementById("movie-chart").childNodes[1].childNodes[1].childNodes[1];
	// var btnReser = document.getElementById("movie-chart").childNodes[1].childNodes[1].childNodes[5];

	var btnReser = btnMovieChart.nextSibling.nextSibling.nextSibling.nextSibling;

	//무비차트 탭 기능
	btnMovieChart.onclick = function () {
		document.body.classList.add("mov1");
		document.body.classList.remove("mov2");
	}

	btnReser.onclick = function () {
		document.body.classList.remove("mov1");
		document.body.classList.add("mov2");
	}


	//무비랜덤재생
	var movieIndex = getRandom(0, movieLists.length - 1);
	mv.setAttribute("src", movieLists[movieIndex].url);
	mtitle.innerText = movieLists[movieIndex].title;
	stitle[0].innerText = movieLists[movieIndex].sub1;
	stitle[1].innerText = movieLists[movieIndex].sub2;
	mv.play();

	play.onclick = function() {
		if (mv.paused) {
			mv.play();
			this.setAttribute("title", "멈춤");
			iPlay.setAttribute("class", "fa-solid fa-pause");
		} else {
			mv.pause();
			this.setAttribute("title", "재생");
			iPlay.setAttribute("class", "fa-solid fa-play");
		}
	}
	mute.onclick = function() {
		console.log(mv.muted);
		//fa-solid fa-volume-xmark
		//fa-solid fa-volume-high
		if(mv.muted) {
			mv.muted = false;
			iMute.setAttribute("class", "fa-solid fa-volume-high");
		} else {
			mv.muted = true;
			iMute.setAttribute("class", "fa-solid fa-volume-xmark");
		}
	}


	// console.log(mainGnbMenuList);
	for(var i = 0; i < mainGnbMenuList.length; i++) {
		mainGnbMenuList[i].onmouseover = function(e) {
			submenu.style.height = "293px";
		};
	}

	headerBottom.onmouseleave = function(e) {
		submenu.style.height = "0px";
	}

	randAd(topAdImg, topAd, topAdLink, adts);

	topAdCloser.onclick = function(e) {
		var topAd = document.getElementsByClassName("top-ad");
		topAd[0].style.display = 'none';
	};

	movieSearch.addEventListener('submit', function(e) {
		if(txtSearch.value === "") {
			txtSearch.placeholder = "검색어를 입력하세요.";
			txtSearch.focus();
		} else {
			this.submit();
		}
		e.preventDefault(); //전송 막음.
	});

	var swiperWrapper = document.querySelector(".swiper-wrapper");
	//Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
	
	for (var i = 0; i < movieChartList.length; i++) {
		var swiperSlide = document.createElement("div");
		swiperSlide.classList.add("swiper-slide");
		var swDiv = document.createElement("div");

		var swRelDiv = document.createElement("div");
		swRelDiv.classList.add("rel");
		var swImg = document.createElement("img");
		swImg.classList.add("thumb");
		swImg.setAttribute("src", movieChartList[i].url);
		swImg.setAttribute("alt", movieChartList[i].title);
		var swAge = document.createElement("div");
		swAge.classList.add("age");
		swAge.innerText = movieChartList[i].age;
		var swDay = document.createElement("div");
		swDay.classList.add("day");
		swDay.innerText = movieChartList[i].day;
		var swDiv2 = document.createElement("div");
		var swMovTitle = document.createElement("div");
		swMovTitle.classList.add("mov-title");
		swMovTitle.innerText = movieChartList[i].title;
		var swMovDesc = document.createElement("div");
		swMovDesc.classList.add("mov-desc");
		var imgSpan = document.createElement("span");
		var spanImg = document.createElement("img");
		spanImg.setAttribute("src", "https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggood.png");
		spanImg.setAttribute("alt", movieChartList[i].view);
		var spanView = document.createElement("span");
		spanView.innerText = movieChartList[i].view + "%";
		var spanReserv = document.createElement("span");
		spanReserv.innerText = movieChartList[i].reserv + "%";

		swRelDiv.appendChild(swImg);
		swRelDiv.appendChild(swAge);
		swRelDiv.appendChild(swDay);

		swDiv2.appendChild(swMovTitle);
		imgSpan.appendChild(spanImg);
		swMovDesc.appendChild(imgSpan);
		swMovDesc.appendChild(spanView);
		swMovDesc.appendChild(spanReserv);
		swDiv2.appendChild(swMovDesc);

		swDiv.appendChild(swRelDiv);
		swDiv.appendChild(swDiv2);

		swiperSlide.appendChild(swDiv);

		swiperWrapper.appendChild(swiperSlide);
	}


	//무비차트 슬라이더
	const mc = new Swiper('#mc', {
		// Optional parameters
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 30,
		// Navigation arrows
		navigation: {
			nextEl: '#mc .swiper-button-next',
			prevEl: '#mc .swiper-button-prev',
		},

	});
};

function randAd(topAdImg, topAd, topAdLink, adts) {
	var listTopAds = [
		{
			src: "img/top_ad.jpg",
			alt: "ad1",
			link: "#",
			bgcolor: "#14100f"
		},
		{
			src: "img/top_ad2.jpg",
			alt: "ad2",
			link: "#",
			bgcolor: "#000000"
		},
		{
			src: "img/top_ad3.jpg",
			alt: "ad3",
			link: "#",
			bgcolor: "#000000"
		}
	];

	var listTopAd = listTopAds[getRandom(0, listTopAds.length - 1)];

	topAdImg.setAttribute("src", listTopAd.src);
	topAdImg.setAttribute("alt", listTopAd.alt);
	topAdLink.setAttribute("href", listTopAd.link);
	topAd.style.backgroundColor = listTopAd.bgcolor;

	if(listTopAd.alt === "ad1") {
		for(var i = 0; i < adts.length; i++) {
			adts[i].style.display = 'inline';
		}
	} else {
		for(var i = 0; i < adts.length; i++) {
			adts[i].style.display = 'none';
		}
	}
}