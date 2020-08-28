function zero(){
    document.write('zero.length : ', zero.length, ' arguments.length : ', arguments.length);
}
zero(); // zero.length : 0, arguments.length : 0
document.write("<br> <br>");
// 0일때는 별 차이없음 
function one(arg1){
    document.write('one.length : ', one.length, ' arguments.length : ', arguments.length);
}
one('val1','val2'); // one.length : 1, arguments.length : 2
document.write("<br> <br>");
// one.length : 1 인건 one 함수에 정의된 인자(parameter)의 수를 의미
// arguments.length : 2 인건 one 함수로 실제로 전달된 인자의 수를 의미
function two(arg1, arg2){
    document.write('two.length : ', two.length, ' arguments.length : ', arguments.length);
}
two('val1'); // two.length : 2, arguments.length : 1
document.write("<br> <br>");
// two.length : 2 인건 two 함수에 정의된 인자의 수를 의미
// arguments.length : 1 인건 two 함수에 실제로 전달된 인자의 수를 의미

// 매개변수의 수에 관련된 방법은 두가지가 있음
// 1. 함수.length : 함수에 정의된 인자의 수를 의미
// 2. arguments.length : 함수로 전달된 실제 인자의 수를 의미
