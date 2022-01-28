console.log(`hi this is the console`);
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

/* canvas code */

function getX(i,width) {
  const px = i/4;
  const edgeX = (width-1)/2;
  const x = (px%width)-edgeX;
  return x;
}

function getY(i,width,height) {
  const px = i/4;
  const edgeY = (height-1)/2;
  const y = edgeY - Math.floor(px/width);
  return y;
}

function draw() {
  const canvas = document.getElementById("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    let x = getX(i,canvas.width,canvas.height);
    let y = getY(i,canvas.width,canvas.height);
    if (x < 0) {
      x = -x;
      data[i] = (510/(canvas.width-1))*x;
    }
    else if (x >= 0) {
      data[i] = (510/(canvas.width-1))*x;
    }
    if (y < 0) {
      y = -y;
      data[i+1] = (510/(canvas.height-1))*y;
    }
    else if (y >= 0) {
      data[i+1] = (510/(canvas.height-1))*y;
    }
    data[i+3] = 255;
  }
  ctx.putImageData(imageData,0,0);
}
// i/4 = 0,1,2,3,...,40400
// x = (i-100)%width
// y = 100 - Math.floor(i/width)
/*
000 +100
001  +99
099   +1
100    0
101   -1
199  -99
200 -100
*/
