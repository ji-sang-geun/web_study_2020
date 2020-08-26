var i_1 = 5;

function a_1(){
    var i_1 = 10;
    b_1();
}

function b_1(){
    document.write(i_1);
}

a_1(); // 5 출력 
document.write("<br> <br>");

var i_2 = 5;

function a_2(){
    var i_2 = 10;
    b_2();

    function b_2(){
        document.write(i_2);
    }
}
a_2(); // 10 출력

// 함수가 어디에 위치했느냐에 따라 결과 값이 달라짐
// 함수가 선언된 시점에서 변수의 유효범위가 바뀌는 것 == 정적 유효범위라고 함
// lexical scoping == static scoping