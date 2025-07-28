// 선언부
let number1 = 10;
let number2 = 15;
var result;
var d = document 
// 구현부
// 1.=
result = number1
d.getElementById("result1").innerHTML = `<h1> number1 =result 이므로 number1의 값은${number1}이고 number2의 값은${number2} 결과값은 ${result}이다</h1>`
// 2. +=
result = (number1 += number2)
d.getElementById("result2").innerHTML = `<h1> result=number1+number2이므로 number1의 값은${number1}이고 number2의 값은${number2}이고 결과값은 ${result}이다</h1>`
// 3.-=
result = (number1 -= 7)
d.getElementById("result3").innerHTML = `<h1> result=number1-number2 이므로 number1의 값은${number1}이고 number2의 값은${number2}이고 결과값은 ${result}이다</h1>`
// 4.+=
result = (number1 *= number2)
d.getElementById("result4").innerHTML = `<h1> result=number*number2 이므로 number1의 값은${number1}이고 number2의 값은${number2}이고 결과값은 ${result}이다</h1>`
// 5./=
result = (number1 /= number2)
d.getElementById("result5").innerHTML = `<h1> result=number/number2 이므로 number1의 값은${number1}이고 number2의 값은${number2}이고 결과값은 ${result}이다</h1>`
// 6.%=
result = (number1 %= number2)
d.getElementById("result6").innerHTML = `<h1> result=number%number2 이므로 number1의 값은${number1}이고 number2의 값은${number2}이고 결과값은 ${result}이다</h1>`