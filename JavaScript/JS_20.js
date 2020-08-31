function func(){
    document.write('Hello? <br>');
}

func(); // Hello? 출력 //   
window.func(); // Hello? 출력 // window = 객체, func() = 속성 괄호가 있으므로 함수, 따라서 메소드임.

var o = {'func' : function(){
    document.write('Hello? <br>');
}}
o.func(); // Hello? 출력
globalThis.o.func(); // Hello? 출력

// JS에서 모든 객체는 전역객체의 프로퍼티 
// 전역 객체의 이름은 호스트 환경에 따라 이름이 달라질 수 있음
// Chromium 기반 브라우저는 globalThis 사용해도됨
// 하지만 전역 객체의 api들은 호스트 환경에 따라 달라지지 않음