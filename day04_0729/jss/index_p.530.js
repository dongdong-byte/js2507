let input = prompt("숫자를 입력하세요.");

if (input === null) {
    // 입력 취소했을 때
    alert("입력 취소");
} else {
    let usernumber = parseInt(input);
    if (!isNaN(usernumber)) {
        // 숫자가 정상적으로 변환된 경우
        usernumber % 3 === 0 
            ? alert("3의 배수") 
            : alert("3의 배수가 아닙니다.");
    } else {
        // 숫자가 아닌 문자열 등 잘못된 입력일 때
        alert("유효한 숫자를 입력해주세요.");
    }
}