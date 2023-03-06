let num = 0;
let num2 = 0;
let num3 = 0;
const miliSecTime = document.getElementById('mili-sec');
const secTime = document.getElementById('sec');
const minTime = document.getElementById('min');


let interval;
function startTimer() {
    num++;
    if (num < 10) {
        miliSecTime.innerText = "0" + num;
    }
    if (num > 10) {
        miliSecTime.innerText = num;
    }
    if (num == 10) {
        num = 0;
        num2++;
        secTime.innerText = "0" + num2;
        miliSecTime.innerText = "0" + 0;
    }
    if (num2 > 9) {
        secTime.innerText = num2;
    }

    if (num2 == 60) {
        num2 = 0;
        num3++;
        minTime.innerText = "0" + num3;
        secTime.innerText = "0" + 0;
    }
}
let isStart = true;

function f1() {
    isStart= !isStart;
    if(isStart){
    interval = setInterval(() => {
        startTimer();
    }, 100);}
    else{
        clearInterval(interval);
    }
    
}

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(interval);
})
document.getElementById('reset').addEventListener('click', function () {
    clearInterval(interval);
    num = "00";
    num2 = "00";
    num3 = "00";
    miliSecTime.innerText = num;
    secTime.innerText = num2;
    minTime.innerText = num3;
})
