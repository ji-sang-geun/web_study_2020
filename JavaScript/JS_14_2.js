function a(){
    var i = 0; // var을 안붙이고 i = 0을 한다면 전역변수 취급이 됨
}              // 따라서 밑 for 반복문에서 무한루프가 발생하게 되므로 전역변수, 지역변수를 주의 깊게 사용할 것

for(var i = 0; i < 5; i++){
    a(); //
    document.write(i); // 0 1 2 3 4 출력
}


