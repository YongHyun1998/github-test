var imgList =  [
    {
        url:"https://www.w3schools.com/w3images/chicago.jpg",
        title:"Los Angeles",
        sub:"The atmosphere in New York is lorem ipsum."
    },
    {
        url:"https://www.w3schools.com/w3images/ny.jpg",
        title:"New York",
        sub:"The atmosphere in New York is lorem ipsum."
    },
    {
        url:"https://www.w3schools.com/w3images/la.jpg",
        title:"Chicago",
        sub:"Thank you, Chicago - A night we won't forget."
    }
];
window.onload = function() {
    var bugger = document.querySelector(".bugger");
    var mobSubList = document.querySelector(".mob-sub-list");

    bugger.onclick = function() {
        var show = mobSubList.style.display;
        //console.log(typeof mobSubList.style.display);
        //mobSubList.style.display = "block";
        //console.log(mobSubList.style.display);
        //mobSubList.style.display = "none";
        //console.log(mobSubList.style.display);
        //"" none : block
        if (show === "" || show === "none") {
            mobSubList.style.display = "block";
        } else {
            mobSubList.style.display = "none";
        }
    };

    var mainImage = document.querySelector(".images > img");
	var mainTitle = document.querySelector(".local > p:nth-child(1)");
	var subTitle = document.querySelector(".local > p:nth-child(2)");
	var mainIndex = 0;

	setInterval(function() {
		mainIndex++; //1 2 3 4 5 6 7 8 
		if (mainIndex >= 3) {
			mainIndex = 0;
		}
		console.log(mainIndex);
		mainImage.setAttribute("src", imgList[mainIndex].url);
		mainTitle.innerText = imgList[mainIndex].title;
		subTitle.innerText = imgList[mainIndex].sub;
	}, 3000);
};
