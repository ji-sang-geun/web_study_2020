function sum(arg1, arg2){
    return arg1+arg2;
}
document.write(sum.apply(null,[1,2])+"<br>"); // 3 출력
document.write(sum(1,2)); // 3 출력

// 함수 sum은 Function 객체의 인스턴스. 따라서 객체 Function의 메소드 apply 호출 가능
// apply는 두 개의 인자를 가짐. (첫번째 인자는 함수(sum)이 실행될 맥락, 두번째 인자는 배열)
// 두번째 인자인 배열의 존재하는 원소가 함수(sum)의 인자로 순차적 대입

// apply와 비슷한 메소드로 call이 있음