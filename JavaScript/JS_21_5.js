var o = {};
var p = {};
function func(){
    switch(this){
        case o:
            document.write('o === this <br>');
            break;
        case p:
            document.write('p === this <br>');
            break;
        case window:
            document.write('this === window <br>');
            break;
    }
}

func(); // this는 window가 됨
func.apply(o); // this는 o가 됨
func.apply(p); // this는 p가 됨

// 함수의 메소드인 apply, call을 이용하면 this의 값을 제어 가능