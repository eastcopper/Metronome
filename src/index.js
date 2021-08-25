const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');
const start = document.getElementById('start');

let time = null;
let inputValue = 60;
let sound = new Audio("../asset/sound.wav");
let play = false;

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
    if (play) {
        clearInterval(time);
        time = setInterval(playSound, realBpm(inputValue));
    }
}

function realBpm(bpm) {
    return (60 * 1000) / bpm;
}

function playSound() {
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play();
}

function bpmStart() {
    play = true;
    time = setInterval(playSound, realBpm(inputValue));
}

input.addEventListener("input", range);
start.addEventListener("click", bpmStart);