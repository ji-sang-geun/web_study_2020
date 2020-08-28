function add(){
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : ' +arguments[i] +"<br>");
        sum += arguments[i];
    }
    return sum;
}

document.write('result : ' + add(1,2,3,4));

// arguments == 유사 배열 / 실제로는 arguments 객체의 인스턴스
// JS는 타 언어와 다르게 매개변수 즉, parameter가 없어도 arguments를 통해 인자 전달 가능