function a_1(){} // var a_1 = function(){}

a_2 = {
    b: function(){

    }
}; // 이 때 b == 함수 내 변수 역할을 하므로 속성 (property), function은 객체의 속성 값으로 사용하므로 메소드 (method)라 함

function cal(func, num){
    return func(num);
}

function increase(num){
    return num+1;
}

function decrease(num){
    return num-1;
}

document.write(cal(increase,1));
document.write(cal(decrease,1)); //함수는 값이므로 다른 함수의 인자로 전달 가능