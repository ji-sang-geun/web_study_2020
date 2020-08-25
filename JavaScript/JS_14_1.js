var vscope_1 = 'global'; // 전역변수
function fscope_1(){
    document.write(vscope_1);
}
fscope_1(); // global 출력

document.write("<br> <br>");

var vscope_2 = 'global'; // 전역변수
function fscope_2(){
    var vscope_2 = 'local'; // 지역변수
    document.write(vscope_2); 
}
fscope_2(); // local 출력
document.write("<br>");
document.write(vscope_2); // global 출력

document.write("<br> <br>");

var vscope_3 = 'global'; // 전역변수
function fscope_3(){
    vscope_3 = 'local'; // var를 쓰지 않으면 전역변수가 됨
    document.write(vscope_3);
}
fscope_3(); // local 출력
document.write("<br>");
document.write(vscope_3); // local 출력
