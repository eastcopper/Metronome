const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');
const click = document.getElementById('start');

let time = null;
let inputValue = 60;
let sound = new Audio("../asset/sound.wav");

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
    clearInterval(time);
    time = setInterval(playSound, realBpm(inputValue));
}

function realBpm(bpm) {
    return (60 * 1000) / bpm;
 }

function playSound() {
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play();
 }

input.addEventListener("input", range);