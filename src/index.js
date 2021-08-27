const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');
const start = document.getElementById('start');
const circle1 = document.getElementsByClassName('circle')[0];
const circle2 = document.getElementsByClassName('circle')[1];
const effect = document.getElementById('effect');

let time1 = null;
let time2 = null;
let inputValue = 60;
let sound = new Audio("../asset/sound/sound.wav");
let play = false;
let click = false;

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
    if (play) {
        clearInterval(time1);
        clearInterval(time2);
        time1 = setInterval(playSound, realBpm(inputValue));
        time2 = setInterval(circle, realBpm(inputValue));
    } // start 버튼을 눌렀을 때
}

let point = 0;
function circle() {
    circle1.classList.add('increase');
    circle2.classList.add('increase'); // 커지는 애니메이션
    click = true;
    setTimeout(function () {
        circle1.classList.remove('increase');
        circle2.classList.remove('increase'); // 작아지는 애니메이션
        setTimeout(function () {
            click = false;
        }, 100)
    }, 100)
}

circle2.addEventListener('click', function () {
    if (click) {
        effect.children[0].src = '../asset/img/perfect.png';
        effect.classList.add('increase'); // perfect 이미지 띄우기
        setTimeout(function() {
            effect.classList.remove('increase');
            effect.children[0].src = ' '; // perfect 이미지 지우기
        }, 200)
    }
})

function realBpm(bpm) {
    return (60 * 1000) / bpm; // bpm설정
}

function playSound() {
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play(); // 소리 재생
}

function onoff() {
    if (!play) {
        play = true;
        time1 = setInterval(circle, realBpm(inputValue));
        time2 = setInterval(playSound, realBpm(inputValue));
        start.innerHTML = "STOP"; // start 버튼을 눌렀을 때
    }
    else {
        play = false;
        clearInterval(time1);
        clearInterval(time2);
        start.innerHTML = "START";
    } // stop 버튼을 눌렀을 때
}

input.addEventListener("input", range);
start.addEventListener("click", onoff);