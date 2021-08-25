const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');
const start = document.getElementById('start');
const circle1 = document.getElementsByClassName('circle')[0];
const circle2 = document.getElementsByClassName('circle')[1];

let time1 = null;
let time2 = null;
let inputValue = 60;
let sound = new Audio("../asset/sound.wav");
let play = false;

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
    if (play) {
        clearInterval(time1);
        clearInterval(time2);
        time1 = setInterval(playSound, realBpm(inputValue));
        time2 = setInterval(circle, realBpm(inputValue));
    }
}

function circle() {
    circle1.classList.add('increase');
    circle2.classList.add('increase');
    setTimeout(function () {
        circle1.classList.remove('increase');
        circle2.classList.remove('increase');
    }, 100)
}

function realBpm(bpm) {
    return (60 * 1000) / bpm;
}

function playSound() {
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play();
}

function onoff() {
    if (!play) {
        play = true;
        time1 = setInterval(circle, realBpm(inputValue));
        time2 = setInterval(playSound, realBpm(inputValue));
        start.innerHTML = "stop";
    }
    else {
        play = false;
        clearInterval(time1);
        clearInterval(time2);
        start.innerHTML = "start";
    }
}

input.addEventListener("input", range);
start.addEventListener("click", onoff);