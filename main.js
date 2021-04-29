//初期化　定義
let nowTimer1;
let nowTimer2;
let nowTimer3;
let nowTimer4;
let nowTimer5;
let nowTimer6;
let nowTimer7;
let nowTimer8;
let nowTimer9;

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 8;
let count5 = 8;
let count6 = 8;
let count7 = 1;
let count8 = 1;
let count9 = 1;

let turn = 3;

const nowTime1   = document.getElementById('nowTime1'); // スロット1〜9
const nowTime2   = document.getElementById('nowTime2');
const nowTime3   = document.getElementById('nowTime3');
const nowTime4   = document.getElementById('nowTime4');
const nowTime5   = document.getElementById('nowTime5');
const nowTime6   = document.getElementById('nowTime6');
const nowTime7   = document.getElementById('nowTime7');
const nowTime8   = document.getElementById('nowTime8');
const nowTime9   = document.getElementById('nowTime9');

const setTime1   = document.getElementById('setTime1');　//ストップボタン1〜3
const setTime2   = document.getElementById('setTime2');
const setTime3   = document.getElementById('setTime3');

const startTimer = document.getElementById('startTimer');

nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;
nowTime4.textContent = count4;
nowTime5.textContent = count5;
nowTime6.textContent = count6;
nowTime7.textContent = count7;
nowTime8.textContent = count8;
nowTime9.textContent = count9;

setTime1.disabled = true;
setTime2.disabled = true;
setTime3.disabled = true;

//処理
startTimer.addEventListener('click', function() { //スタート押されたら
    setTime1.disabled = false
    setTime2.disabled = false
    setTime3.disabled = false

    clearInterval(nowTimer1);
    clearInterval(nowTimer2);
    clearInterval(nowTimer3);
    clearInterval(nowTimer4);
    clearInterval(nowTimer5);
    clearInterval(nowTimer6);
    clearInterval(nowTimer7);
    clearInterval(nowTimer8);
    clearInterval(nowTimer9);
    cntUp();
    startTimer.disabled = true
    turn = 3;
})

const cntUp = function() { //スロット処理 * 9
    nowTimer1 = setInterval(function() {
        count1 += 1;
        nowTime1.textContent = count1;
        if (count1 === 9) count1 = 0;
    }, 100);

    nowTimer2 = setInterval(function() {
        count2 += 1;
        nowTime2.textContent = count2;
        if (count2 === 9) count2 = 0;
    }, 100);

    nowTimer3 = setInterval(function() {
        count3 += 1;
        nowTime3.textContent = count3;
        if (count3 === 9) count3 = 0;
    }, 100);

    nowTimer4 = setInterval(function() {
        count4 += 1;
        nowTime4.textContent = count4;
        if (count4 === 9) count4 = 0;
    }, 100);

    nowTimer5 = setInterval(function() {
        count5 += 1;
        nowTime5.textContent = count5;
        if (count5 === 9) count5 = 0;
    }, 100);

    nowTimer6 = setInterval(function() {
        count6 += 1;
        nowTime6.textContent = count6;
        if (count6 === 9) count6 = 0;
    }, 100);

    nowTimer7 = setInterval(function() {
        count7 += 1;
        nowTime7.textContent = count7;
        if (count7 === 9) count7 = 0;
    }, 100);

    nowTimer8 = setInterval(function() {
        count8 += 1;
        nowTime8.textContent = count8;
        if (count8 === 9) count8 = 0;
    }, 100);

    nowTimer9 = setInterval(function() {
        count9 += 1;
        nowTime9.textContent = count9;
        if (count9 === 9) count9 = 0;
    }, 100);
};

setTime1.addEventListener('click', function(){//ストップ押されたら
    setTime1.disabled = true;
    clearInterval(nowTimer1); 
    clearInterval(nowTimer4);　//上下　±3
    clearInterval(nowTimer7);
    turn -= 1;
    check();
})

setTime2.addEventListener('click', function(){//ストップ押されたら
    setTime2.disabled = true;
    clearInterval(nowTimer2);
    clearInterval(nowTimer5);
    clearInterval(nowTimer8);
    turn -= 1;
    check();
})
setTime3.addEventListener('click', function(){//ストップ押されたら
    setTime3.disabled = true;
    clearInterval(nowTimer3);
    clearInterval(nowTimer6);
    clearInterval(nowTimer9);
    turn -= 1;
    check();
})

const check = () => {
    if (turn !== 0) {
        return;
    }
        if (
            nowTime1.textContent === nowTime2.textContent &&
            nowTime1.textContent === nowTime3.textContent
            ) {
                alert('おめでとう');
        }
    else if (
            nowTime4.textContent === nowTime2.textContent &&
            nowTime4.textContent === nowTime9.textContent
            ) {
                alert('おめでとう');
        }
    else if (
            nowTime6.textContent === nowTime2.textContent &&
            nowTime6.textContent === nowTime7.textContent
             ) {
                alert('おめでとう');
        }
        else {
            alert('再挑戦！');
        }
    setTime1.disabled   = false
    setTime2.disabled   = false
    setTime3.disabled   = false
    startTimer.disabled = false
};

