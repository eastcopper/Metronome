const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');

let inputValue = 60;
let sound = new Audio("../asset/sound.wav");

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
}

setInterval(function() {
    playSound();
}, 60000 / inputValue);

function playSound() {
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play();
 }

input.addEventListener("input", range);