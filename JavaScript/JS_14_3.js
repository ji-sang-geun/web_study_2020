var MYAPP_1 = {}; // 전역변수를 하나 사용함 
MYAPP_1.calculator = {
    'left' : null,
    'right' : null
};
MYAPP_1.coordinate = {
    'left' : null,
    'right' : null
};

MYAPP_1.calculator.left = 10;
MYAPP_1.calculator.right = 20;

function sum_1(){
    return MYAPP_1.calculator.left + MYAPP_1.calculator.right; // 30 반환
}

document.write(sum_1());
document.write("<br> <br>");

(function(){ // 익명함수를 사용함으로 전역변수를 하나도 사용 안함
    var MYAPP_2 = {};
    MYAPP_2.calculator = {
        'left' : null,
        'right' : null
    };
    MYAPP_2.coordinate = {
        'left' : null,
        'right' : null
    };

    MYAPP_2.calculator.left = 10;
    MYAPP_2.calculator.right = 20;

    function sum_2(){
        return MYAPP_2.calculator.left + MYAPP_2.calculator.right;
    }

    document.write(sum_2());
}())

// 익명함수를 사용하는 방법은 JS에서 로직을 모듈화하는 일반적인 방법