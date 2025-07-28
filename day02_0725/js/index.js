// 선언부
var r = document.getElementById("result");
let num1 = 8;
let num2 = 3;
let result = 0;

// 덧셈
// 구현부
result = num1 + num2;

// 출력부
console.log(`${result}`)
r.innerHTML = `<h1>[더하기 +] ${result}</h1>`;

result = num1 + num2
r.innerHTMLhtml = r.innerHTML + `<h1>[빼기 -] ${result}</h1>`;
//초기화
result = 0;

// 뻴셈

// 구현부
result = num1 - num2;

// 출력부
result = num1 + num2
console.log(`${result}`)
r.innerHTMLhtml = r.innerHTML + `<h1>[빼기 -] ${result}</h1>`;

// 초기화
result = 0;

// 곱셈
result = num1 * num2
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[나눗셈 - ] ${result}</h1>`;
// 초기화
result = 0;
// 나눗셈-----나누어 떨어지는 몫---
result = num1 / num2
console.log(`${result}`)
console.log(`${result.toFixed(3)}`)
r.innerHTML = r.innerHTML + `<h1>[나눗셈/] ${result}</h1>`

// 초기화
result = 0
// 나머지------나누고 남은 나머지값------
result = num1 % num2
console.log(`${result}`)
console.log(`${result.toFixed(3)}`)
r.innerHTML = r.innerHTML + `<h1>[나눗셈/] ${result}</h1>`
r.innerHTML = r.innerHTML + `<h1>[나눗셈/] ${result}</h1>`
// 초기화
result = 0;
result = ++num1
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[1씩 증가] ${result}</h1>`

// 1씩 감소

result = 0;
result = --num2
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[1씩 감소 ] ${result}</h1>`

// 후행 연산자
// 초기화
result = 0;
let num00 = 7;
// 1씩 감소
result = num00--;
console.log(`${result}`);
r.innerHTML = r.innerHTML + `<h1>[1--식 감소] ${result}</h1>`;
r.innerHTML = r.innerHTML + `<h1>[1--식 감소] ${num00}</h1>`;

// 1씩 증가
result = 0;
let nom00 = 7;
result = num00++
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[1++씩 증가] ${result}</h1>`
r.innerHTML = r.innerHTML + `<h1>[1++씩 증가] ${num00}</h1>`
