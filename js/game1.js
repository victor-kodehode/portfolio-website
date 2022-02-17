const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor = 'black';

const r = 16;
let y1 = Math.floor(canvas.height/2) - 50;
let y2 = Math.floor(canvas.height/2) - 50;
let x = Math.floor(canvas.width/2);
let y = Math.floor(canvas.height/2);
let angle = (Math.PI/2)*Math.random() - Math.PI/4;
console.log(angle);
angle += Math.PI * Math.floor(2*Math.random());
console.log(angle);
let dx = 2*Math.cos(angle);
let dy = 2*Math.sin(angle);
let distance_x = x-r;
let distance_y1 = y-y1;
let distance_y2 = y-y2;

const validKeys = ['w','s','å','æ'];

let controller = {
    w:false,
    s:false,
    å:false,
    æ:false
};

window.addEventListener('keydown',e=>{
    if(validKeys.includes(e.key)){
        controller[e.key] = true;
    }
});
window.addEventListener('keyup',e=>{
    if(validKeys.includes(e.key)){
        controller[e.key] = false;
    }
});

function move(){
    if(y1>r && controller['w']){
        y1-=4;
    }
    if(y1<canvas.height-r-100 && controller['s']){
        y1+=4;
    }
    if(y2>r && controller['å']){
        y2-=4;
    }
    if(y2<canvas.height-r-100 && controller['æ']){
        y2+=4;
    }
}

function collision(){
    if((x+dx>0 && x+dx<3*r) && (y>y1 && y<y1+100)){
        x += dx;
        x += 2*(3*r - x);
        dx *= -1;
        y += dy;
        dx *= 1.1;
        dy *= 1.1;
    }
    if((x+dx<canvas.width && x+dx>canvas.width-3*r) && (y>y2 && y<y2+100)){
        x += dx;
        x += 2*(canvas.width-3*r - x);
        dx *= -1;
        y += dy;
        dx *= 1.1;
        dy *= 1.1;
    }
}

async function game(){
    while(true){
        move();
        ctx.clearRect(0,0,canvas.width,canvas.height);

        distance_x = x-r;
        distance_y1 = y-y1;
        distance_y2 = y-y2;

        collision();

        x += dx;
        y += dy;

        if(x<r){
            document.body.style.backgroundColor = 'rgb(255,191,191)';
            document.getElementById('game-title').textContent = "RED WINS!";
            document.getElementById('game-title').style.color = 'red';
            break;
        }
        if(x>canvas.width-r){
            document.body.style.backgroundColor = 'rgb(191,191,255)';
            document.getElementById('game-title').textContent = "BLUE WINS!";
            document.getElementById('game-title').style.color = 'blue';
            break;
        }
        if(y<r || y>canvas.height-r){
            dy *= -1;
        }

        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(r,y1,r,100);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(canvas.width-2*r,y2,r,100);
        ctx.fill();
        ctx.closePath();

        await new Promise(resolve => setTimeout(resolve, 10));
    }
}
game();