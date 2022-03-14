console.log("Hello, World!");
// await new Promise(resolve => setTimeout(resolve, 10));
// Math.floor(Math.random() * 95) + 32;
// String.fromCharCode(x);
const scramble = document.getElementById("scramble");
const hello = [72,101,108,108,111,44,32,87,111,114,108,100,33];
let word = [];
let r = 0;
let counter = 0;
let switcher = false;

async function run() {
    scramble.textContent = "\xa0";
    scramble.textDecoration = "underline";
    for (let i = 0; i < 4; i++) {
        if (switcher) {
            scramble.style.textDecoration = "none";
        } else {
            scramble.style.textDecoration = "underline";
        }
        switcher = !switcher;
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    for (let i = 0; i < hello.length; i++) {
        word.push("");
        counter = 0;
        while(true) {
            counter++;
            if (counter > 25) {
                word[i] = String.fromCharCode(hello[i]);
                scramble.textContent = word.join("");
                break;
            }
            r = Math.floor(Math.random() * 95) + 32;
            word[i] = String.fromCharCode(r);
            scramble.textContent = word.join("");
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    scramble.style.textDecoration = "underline";
}

run();