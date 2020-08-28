var o1 = {val1:1, val2:2, val3:3};
var o2 = {v1:10, v2:50, v3:100, v4:25};
function add(){
    var sum = 0;
    for (name in this){
        sum += this[name];
    }
    return sum;
}

document.write(add.apply(o1)+ "<br>"); // 6 출력
document.write(add.apply(o2)+ "<br>"); // 185 출력
document.write("<br>");
// apply 메소드를 사용하지 않으면 밑 코드와 같이 복잡해지고 불편함

function add_1(){
    var sum_1 = 0;
    for (name in this){
        if(typeof this[name] !== 'function'){ 
            sum_1 += this[name];
        }
    }
    return sum_1;
}

var o1_1 = {val1: 1, val2:2, val3:3, add_1:add_1}; // 객체에 데이터와 상관없는 함수를 추가해야하기 때문에 비효율적
var o2_1 = {vl:10, v2:50, v3:100, v4: 25, add_1:add_1};

document.write(o1_1.add_1()+ "<br>"); 
document.write(o2_1.add_1()+ "<br>");

// JS는 타 언어와 다르게 함수가 독립적인 객체로 존재하고 apply, call과 같은 메소드를 통해 다른 객체의 소유물인 것 처럼 실행 가능
// 만약 apply의 첫번째 인자로 null을 전달하면 apply가 실행된 함수 인스턴스는 전역객체를 맥락으로 실행