let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;

// 
let mtTxt;
let mtRandom = Math.random()

console.log(mtRandom)
if(mtRandom <  0.5){
    mtTxt ="0.5보다 작다."
}else{
    mtTxt = "0.5보다 작지않다."
}
document.getElementById("result").innerHTML 
= `<h1>결과는 ${mtTxt}이다.</h1>`