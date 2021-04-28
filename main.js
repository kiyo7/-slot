let nowTimer1;
let nowTimer2;
let nowTimer3;

let count1 = 0;
let count2 = 0;
let count3 = 0;

const nowTime1   = document.getElementById('nowTime');
const nowTime2   = document.getElementById('nowTime2');
const nowTime3   = document.getElementById('nowTime3');

const setTime1   = document.getElementById('setTime1');
const setTime2   = document.getElementById('setTime2');
const setTime3   = document.getElementById('setTime3');
const startTimer = document.getElementById('startTimer');

nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;

startTimer.addEventListener('click', function() {
    setTime1.disabled = false
    setTime2.disabled = false
    setTime3.disabled = false
    clearInterval(nowTimer1);
    clearInterval(nowTimer2);
    clearInterval(nowTimer3);
    count1 = setInterval('cntUp1()', 100);
    count2 = setInterval('cntUp2()', 100);
    count3 = setInterval('cntUp3()', 100);
    startTimer.disabled = true
})

const cntUp1 = function() {
    count1 += 1;
    nowTime1.textContent = count1;
    if (count1 === 9) {
        count1 = 0;
    }
}
const cntUp2 = function() {
    count2 += 1;
    nowTime2.textContent = count2;
    if (count2 === 9) {
        count2 = 0;
    }
}
const cntUp3 = function() {
    count3 += 1;
    nowTime3.textContent = count3;
    if (count3 === 9) {
        count3 = 0;
    }
}

setTime1.addEventListener('click', function(){
    setTime1.disabled = true;
    clearInterval(nowTimer1);
    console.log(nowTime1.textContent = count1)
})

setTime2.addEventListener('click', function(){
    setTime2.disabled = true;
    clearInterval(nowTimer2);
    console.log(nowTime1.textContent = count1)
})
setTime3.addEventListener('click', function(){
    setTime3.disabled = true;
    clearInterval(nowTimer3);
    console.log(nowTime1.textContent = count1)
})
