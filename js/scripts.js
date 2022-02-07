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
    ctx.arc(x1,y1,r,0,Math.PI*2);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x2,y2,r,0,Math.PI*2);
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
    x1 += dx1;
    x2 += dx2;
    y1 += dy1;
    y2 += dy2;
    if(x1 < r || x1 > canvas.width-r) {
        dx1 *= -1;
        color1 = `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;
    }
    if(y1 < r || y1 > canvas.height-r) {
        dy1 *= -1;
        color1 = `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;
    }
    if(x2 < r || x2 > canvas.width-r) {
        dx2 *= -1;
        color2 = `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;
    }
    if(y2 < r || y2 > canvas.height-r) {
        dy2 *= -1;
        color2 = `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;
    }
}
let color1 = `red`;
let color2 = `red`;
let r = 30;
let x1 = (canvas.width-r*2)*Math.random() + r;
let x2 = (canvas.width-r*2)*Math.random() + r;
let y1 = (canvas.height-r*2)*Math.random() + r;
let y2 = (canvas.height-r*2)*Math.random() + r;
let dx1 = 2*Math.floor(2*Math.random()) - 1;
let dx2 = 2*Math.floor(2*Math.random()) - 1;
let dy1 = 2*Math.floor(2*Math.random()) - 1;
let dy2 = 2*Math.floor(2*Math.random()) - 1;
setInterval(draw, 10);
