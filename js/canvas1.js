/* canvas code */

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const dimension = [canvas.width,canvas.height];
const numberOfBalls = 64;
const r = 4;

function randRGB() {
    return `rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<numberOfBalls;i++){
        ctx.beginPath();
        ctx.arc(xy[0][i],xy[1][i],r,0,Math.PI*2);
        ctx.fillStyle = color[i];
        ctx.fill();
        ctx.closePath();
    }
    for(let i=0;i<numberOfBalls;i++){
        for(let j=0;j<2;j++){
            xy[j][i] += dxy[j][i];
            if(xy[j][i] < r || xy[j][i] > dimension[j]-r) {
                dxy[j][i] *= -1;
                color[i] = randRGB();
            }
        }
    }
}

let color = [];
let xy = [[],[]], dxy = [[],[]];

for(let i=0;i<numberOfBalls;i++){
    color.push(randRGB());
    xy[0].push((canvas.width-r*2)*Math.random() + r);
    xy[1].push((canvas.height-r*2)*Math.random() + r);
    let angle = 2*Math.PI*Math.random();
    dxy[0].push(Math.cos(angle));
    dxy[1].push(Math.sin(angle));
}

setInterval(draw, 10);
