var arr = [];
for (var i = 0; i < 5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    document.write(arr[index]());
    document.write("<br>");
}

// 0 1 2 3 4가 출력될 수 있는 이유는 내부함수가 외부함수의 지역변수에 접근할 수 있었기 때문
// 함수가 만들어지는 시점의 i값을 외부함수가 id라고 하는 지역변수로 가지고 있기 때문에
// 지역별 외부함수의 내부함수를 호출하게 되면 반복문이 돌 때마다 함수가 실행되면서 매개변수 id값으로 i값을 받음
// 따라서 지역변수의 id값을 반환받음 즉, i값을 반환받음