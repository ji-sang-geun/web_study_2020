function sum_1(x,y){ // 함수 리터럴
    return x+y;
}

var sum_2 = new Function('x','y','return x+y;');
// 함수를 명시적으로 만드는 것

document.write(sum_1(1,2)+"<br>");
document.write(sum_2(1,2)+"<br>");

// var o_1 = {}; -> 객체 리터럴
// var o_2 = new object; -> 객체를 명시적으로 만드는 것

// var a_1 = [1,2,3]; -> 배열 리터럴
// var a_2 = new array; -> 배열을 명시적으로 만드는 것

// 리터럴이 명시적으로 만드는 것보다 편리하게 만들 수 있음