var person_1 = {}; // object(객체) 생성
person_1.name = 'sanggeun'; // 객체 내 변수 = property
person_1.introduce = function(){ // property에 담겨있는 값 = method
    return 'My name is '+ this.name;
}
document.write(person_1.introduce());

var person_2 = {
    'name' : 'sanggeun',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person_2.introduce());