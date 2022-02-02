console.log(`hi this is the console`);
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

/* canvas code */

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    if(x < 0 || x > canvas.width) {
        dx *= -1;
    }
    if(y < 0 || y > canvas.height) {
        dy *= -1;
    }
}
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 3;
let dy = 3;
setInterval(draw, 10);
