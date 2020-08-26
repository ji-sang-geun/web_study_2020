function cal(mode){
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }
    return funcs[mode];
}
document.write(cal('plus')(20,10)); // plus가 funcs[mode]로 들어가 plus key의 value로 넘어가게되고 (20,10)을 통해 함수가 호출되어 20+10 즉 30이 반환됨
document.write("<br>");
document.write(cal('minus')(20,10)); // minus가 funcs[mode]로 들어가 minus key의 value로 넘어가게되고 (20,10)을 통해 함수가 호출되어 20-10 즉 10이 반환됨
// 함수는 리턴 값으로도 사용 가능

document.write("<br> <br>");

var process = {
    function(input){ return input + 10; }, // 처음에는 process[0]이 실행되어 function(1){return 1 + 10;}으로 1+10 = 11이 반환
    function(input){ return input * input; }, // process[1]이 실행되어 function(11){return 11 * 11;}로 11 * 11 = 121이 반환
    function(input){ return input / 2;} // process[2]가 실행되어 function(121){return 121 / 2;}가 실행되어 60.5 반환
};
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
document.write(input); // 60.5 출력
// 함수는 배열의 값으로도 사용 가능

// 함수는 변수, 함수의 매개변수, 리턴값 등 용도로 사용할 수 있는데 이를 first class citizen, 혹은 first class object, first class entity, first class value 등으로 부름 