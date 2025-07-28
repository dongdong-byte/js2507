// 선언부
let number1 = 3
let number2 = 4
let result1
let result2
let result3
let result4
let result6
let result7
let result8
let result9

// 구현부
result1 = number1 + number2
result2 = number1 - number2
result4 = number1 / number2


// 출력부
console.log(result1)
document.getElementById("result1").innerHTML=`<h1>${result1}</h1>`
document.getElementById("result2").innerHTML=`<h1>${result2}</h1>`
let result =0;
result = number1*number2
document.getElementById("result3").innerHTML=`<h1>${result}</h1>`
document.getElementById("result4").innerHTML=`<h1>${result4.toFixed(3)}</h1>`

result = (number1 % number2).toFixed(2)
document.getElementById("result5").innerHTML = `<h1>${result}</h1>`
// 선언부
let number3 = 5
let number4 = 6
// 구현부
 result6 = ++number3 +7
//출력부
console.log(result6)
document.getElementById("result6").innerHTML=`<h1>${result6} , ${number3}</h1>`
// 구현부
result7 = --number3 +7
// 출력부
document.getElementById("result7").innerHTML=`<h1>${result7} , 변수는 ${number3}</h1>`
// 후행++
result8 = number4-- + 7
document.getElementById("result8").innerHTML=`<h1>${result8} , 변수는 ${number4} 이다 </h1>`
// 후행--
result9 = number4++ +7
document.getElementById("result9").innerHTML=`<h1>${result9} , 변수는 ${number4}이다 </h1>`

