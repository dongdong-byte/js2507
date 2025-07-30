// 
let myDate = new Date()
let myHour = myDate.getHours()
let greeting = " "
// testcode.start
// 가짜 데이터 (가상값) : 가상의 임시값으로 테스트를 해보세요.
let timeAM = 9
let timePM = 18

// 가데이터로 테스트
myHour = 12
// testcode.end
console.log(myHour)

console.log(myDate)

// if조건문
if (myHour < timeAM) {
    greeeting = "good day"
} else if ( myHour > timePM) {
    greeting = "열공"
}
else {
    greeting = " 굿 귀가!!!!!"
}
console.log(greeting)
// else 조건에 해당하지 않으면

// else if (또다른 조건은)

