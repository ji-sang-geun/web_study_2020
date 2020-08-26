function outter_1(){
	function inner_1(){
		var title_1 = 'coding everybody';
		document.write(title_1);
	}
	inner_1();
}
outter_1(); // coding everybody 출력

// JS에선 함수 안에 다른 함수 선언 가능
// 함수 outter 내부에 함수 inner가 정의 되어있음 
// 이때 함수 inner == 내부 함수

document.write("<br> <br>");

function outter_2(){
	var title_2 = 'coding everybody';
	function inner_2(){
		document.write(title_2);
	}
inner_2();
}
outter_2(); // coding everybody 출력

// 내부함수는 외부함수의 지역변수에 접근 가능
// 윗 함수는 inner 함수에서 title을 호출 했는데 outter의 지역변수에 접근하여 값을 출력하는 것을 알 수 있음 