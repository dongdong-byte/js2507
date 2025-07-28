// 선언부
let number1 = 3
let number2 = 4
//  boolean 타입 :  0과1을 표현하는 2진수의 결과를 준다
var result

var d =document
// 구현부
// 1.==
result = (3 == number1)
console.log("result1")
d.getElementById("result1").innerHTML = `<h1>${result} :  피연산자 값이 서로 같으면 true입니다, (=)은 값이 서로 같은지 물어봅니다.</h1>`
// 2.+=
result = ("3" === number1)
d.getElementById("result2").innerHTML = `<h1>${result} :  피연산자 값도 같고 자료형도 같으면 true입니다.(==)은 값하고 자료형이 같은지 물어봅니다.</h1>`

// 3.!=
result = ("3" != number1)
d.getElementById("result3").innerHTML = `<h1>${result} :  피연산자 값이 서로 같지 않으면 true입니다</h1>`

// 4.!==
result = (number2 !== "4")
d.getElementById("result4").innerHTML = `<h1>${result} : 피연산자 값이 같지 않거나 자료형이 같지 않으면 true입니다. (!)는 부정을의미합니다.</h1>`

// 5. <
result = (number2  < 5)
d.getElementById("result5").innerHTML = `<h1>${result} : 왼쪽 연산자 값이 오른쪽 피연산자 값보다 작거나 같으면 true입니다.</h1>`

// 6.<=
result= (number2 <= 5)
d.getElementById("result6").innerHTML = `<h1>${result} : 왼쪽 피연산자 값이 오른쪽 피연사값보다 작거나 같으면 true입니다.</h1>`

// 7.>
result =(number2 >2)
d.getElementById("result7").innerHTML = `<h1>${result} : 왼쪽 피연산자 감ㅎ이 오른쪽 피연산자 값보다 크면 true입니다.</h1>`

// 8.>=
result =(number2 >= 6)
d.getElementById("result8").innerHTML = `<h1>${result} : 왼쪽 피연산자 값이 오른쪽 피연산자 값보다 크거나 같으면 true입니다.</h1>`