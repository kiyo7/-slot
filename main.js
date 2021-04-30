//初期化　定義
let turn = 3;

let nowTimer1;
let nowTimer2;
let nowTimer3;

let count1 = count2 = count3 = 0;
let count4 = count5 = count6 = 9;
let count7 = count8 = count9 = 1;

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

//↓処理
startTimer.addEventListener('click', function() { //スタート押されたら
    setTime1.disabled = false
    setTime2.disabled = false
    setTime3.disabled = false
    clearInterval(nowTimer1);
    clearInterval(nowTimer2);
    clearInterval(nowTimer3);
    cntUp();
    startTimer.disabled = true
    turn = 3;
})

const cntUp = function() { //カウントアップ処理
        nowTimer1 = setInterval(function() {
        if(count1 === 0) {
            count1 = 0;
            nowTime4.textContent = 9;
            nowTime1.textContent = count1;
            nowTime7.textContent = count1+1;
            count1 += 1;
        } else if (count1 === 9) {
            count1 = 9;
            nowTime4.textContent = count1 -1;
            nowTime1.textContent = count1;
            nowTime7.textContent = 0;
            count1 = 0
        } else {
            nowTime4.textContent = count1 -1;
            nowTime1.textContent = count1;
            nowTime7.textContent = count1 +1;
            count1 += 1;
        }
    }, 100);

    nowTimer2 = setInterval(function() {
        if(count2 === 0) {
            count2 = 0;
            nowTime5.textContent = 9;
            nowTime2.textContent = count2;
            nowTime8.textContent = count2+1;
            count2 += 1;
        } else if (count2 === 9) {
            count2 = 9;
            nowTime5.textContent = count2 -1;
            nowTime2.textContent = count2;
            nowTime8.textContent = 0;
            count2 = 0
        } else {
            nowTime5.textContent = count2 -1;
            nowTime2.textContent = count2;
            nowTime8.textContent = count2 +1;
            count2 += 1;
        }
    }, 100);

    nowTimer3 = setInterval(function() {
        if(count3 === 0) {
            count3 = 0;
            nowTime6.textContent = 9;
            nowTime3.textContent = count3;
            nowTime9.textContent = count3 +1;
            count3 += 1;
        } else if (count3 === 9) {
            count3 = 9;
            nowTime6.textContent = count3 -1;
            nowTime3.textContent = count3;
            nowTime9.textContent = 0;
            count3 = 0
        } else {
            nowTime6.textContent = count3 -1;
            nowTime3.textContent = count3;
            nowTime9.textContent = count3 +1;
            count3 += 1;
        }
    }, 100);
}

setTime1.addEventListener('click', function(){//ストップ押されたら
    setTime1.disabled = true;
    clearInterval(nowTimer1);
    turn -= 1;
    check();
})

setTime2.addEventListener('click', function(){//ストップ押されたら
    setTime2.disabled = true;
    clearInterval(nowTimer2);
    turn -= 1;
    check();
})
setTime3.addEventListener('click', function(){//ストップ押されたら
    setTime3.disabled = true;
    clearInterval(nowTimer3);
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
            nowTime4.textContent === nowTime2.textContent && //斜め
            nowTime4.textContent === nowTime9.textContent
            ) {
                alert('おめでとう');
        }
    else if (
            nowTime6.textContent === nowTime2.textContent && //斜め
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