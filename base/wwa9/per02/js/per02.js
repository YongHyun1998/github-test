var topGnb;

window.onload = function() {
    topGnb = document.querySelector(".header-top-nav");
    console.log(topGnb);
}

window.onscroll = function() {
    if (window.scrollY == 0) {
        topGnb.style.top = "0px";
        topGnb.style.position = "relative";
    } else if (window.scrollY < 100) {
        topGnb.style.top = "-50px";
        topGnb.style.position = "relative";
    } else {
        topGnb.style.top = "0px";
        topGnb.style.position = "fixed";
    }

}