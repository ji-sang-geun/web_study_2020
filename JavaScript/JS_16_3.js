function factory_movie(title){
    return {
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            title = _title;
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

document.write(ghost.get_title());
document.write("<br>");
document.write(matrix.get_title());
document.write("<br> <br>");
ghost.set_title('공각기동대');
document.write(ghost.get_title());
document.write("<br>");
document.write(matrix.get_title());
document.write("<br> <br>");

// Ghost in the shell -> Matrix -> 공각기동대 -> Matrix순으로 실행결과가 나옴
// 클로저는 객체의 메소드에도 사용 가능 (윗 코드는 함수의 리턴값을 객체로 반환)
// 동일한 외부 함수 안에서 만들어진 내부함수 혹은 메소드는 외부함수의 지역변수를 공유 (Ghost in the shell을 공각기동대로 바꿀 때 처럼)
// 같은 외부함수 factory_movie를 공유하는 Ghost와 Matrix의 get_title 결과는 다름 (외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성)
// factory_movie의 지역변수 title은 정의된 객체의 메소드에서만 접근 가능한 값 (title의 값을 읽고 수정할 수 있는 것은 factory_movie 메소드를 통해서 만들어진 객체만 가능)

// 객체의 private 속성은 객체의 외부에서는 접근 불가능한 속성이나 메소드 의미
// 이로인해 객체 내부 값이 노출되어 생기는 오류 차단