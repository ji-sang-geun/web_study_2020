function People(){}
var pe1 = new People();
pe1.name = 'sanggeun';
pe1.introduce = function(){
    return 'My name is ' + this.name;
}
document.write(pe1.introduce()+ '<br>');

var pe2 = new People();
pe2.name = 'aboda';
pe2.introduce = function(){
    return 'My name is '+ this.name;
}
document.write(pe2.introduce()+ '<br>'); 
// 이 코드들은 중복이 있기 때문에 코드의 길이가 길어져 가독성이 떨어짐

function Person(name){ // 이와 같이 생성자 내에서 객체의 프로퍼티를 정의함 = 초기화 (initialize) 
    this.name = name;
    this.introduce = function(){
        return 'My name is '+ this.name;
    }
}

var p1 = new Person('sanggeun');
document.write(p1.introduce() + "<br>");

var p2 = new Person('aboda');
document.write(p2.introduce() + "<br>");
// 코드의 길이가 비교적 줄어들면서 가독성이 좋아짐
