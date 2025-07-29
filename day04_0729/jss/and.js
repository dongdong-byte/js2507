let numberOne = parseInt(prompt("50미만인 숫자를 입력하세요."));
let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요."));

if(numberOne < 50 && numberTwo < 50 ){
    alert("숫자 2개 모두 50 미만이군요");
}else{
    alert("조건에 맞지 않는 숫자가 있습니다.")
}