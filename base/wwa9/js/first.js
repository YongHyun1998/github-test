document.write('Hello world!');
// Document.write('대문자'); 에러

var num = 5; //변수 초기화(정의)
document.write('<h1>' + num + '</h1>')
var num = 7; //변수 초기화(정의)
document.write('<h1>' + num + '</h1>')
//document.write(`<h1>${Num}</h1>`); 에러

// 함수(function)
var avgDistance = function(distance, time) {
    var speed = distance * time;
    document.write(speed)
}

//함수 실행
avgDistance(100, 1)