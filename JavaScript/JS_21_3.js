var funcThis = null;

function Func(){
    funcThis = this;
}

var o1 = Func(); // 함수를 호출했기 때문에 이 this는 window를 가르킴 (전역객체를 가르킴)
if(funcThis === window){
    document.write('window <br>');
}

var o2 = new Func(); // 생성자를 통해 빈 객체를 만들었기 때문에 이 this는 만들어진 객체를 가르킴
if(funcThis === o2){
    document.write('o2 <br>');
}