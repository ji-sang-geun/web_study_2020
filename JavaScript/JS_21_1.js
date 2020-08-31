function func(){
    if(window === this){ // 이 코드의 this는 전역객체인 window와 같음
        document.write("window === this <br>");
    }
}

func();