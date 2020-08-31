var o = {
    func : function(){
        if(o === this){ // 이 코드의 this는 o를 가르킴
            document.write("o === this <br>");
        }
    }
}
o.func(); // o === this 출력

// o.func()이므로 this가 o를 가르킴

/* function func(){
    if(window === this){
        document.write("window === this <br>");
    }
}
func(); // window.func();랑 같음 */

// 윗 코드에선 func()가 window.func()랑 암시적으로 같기 때문에 this가 window를 가르킴