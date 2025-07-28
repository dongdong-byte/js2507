var result = 4;

let num1 = 3
// 할당 연산자-----
// 기본 대입연산자

console.log(`[=대입연산자] ${result}`)

// 누적 대입연산자

result %= num1

// result = result + num1
console.log(`[+= sn대입연산자] ${result}`)

// -=연산자

// result = result - num1
result += num1
console.log(`[-=대입연산자] ${result}`)
console.log("[-=대입연산자]"  + result)