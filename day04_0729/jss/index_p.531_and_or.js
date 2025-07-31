// 순차적으로 두수를 입력 받음
let numerone = parseInt(prompt("50미만인 숫자를 입력해주세요"))
let numverTwo = parseInt(prompt("50미만인 숫자를 입력해주세요"))
let numerthree =parseInt(prompt("50미만인 숫자를 입력하세여"))
let numberfour = parseInt(prompt("50미만인 숫자를 입력하세요."))

if (numerone < 50 || numverTwo < 50) {
    alert(" 숫자 2개중에서 최소한 1개는 10보다 작다.")
} else { alert("숫자 둘다 10보다 크다") }

if(numerthree < 50 && numberfour < 50){
    alert("숫자 2개 모두 50 미만이군요.")

}else{
    alert("조건에 맞지않는 숫자가 있습니다.")
}
