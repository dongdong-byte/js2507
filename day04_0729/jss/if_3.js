let userNumber=parseInt(prompt('숫자를 입력하세요.'))

if(userNumber !== null) 
    (parseInt(userNumber) % 3 === 0) ? alert('3의 배수입니다.') :alert ('3의 배수가 아닙니다.');
// 삼항연산자[]?[]:[]
else
    alert('입력이 취소되었습니다.')

