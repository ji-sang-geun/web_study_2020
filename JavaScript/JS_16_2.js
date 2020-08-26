function outter(){
	var title = 'coding everybody';
	return function(){
		alert(title);
	}
}
inner = outter(); // 원래는 outter가 이미 다 실행되고 소멸된 함수인 거 같지만, 소멸되지 않았다.
inner(); // coding everybody 출력

// 클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미함