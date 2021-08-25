const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');

let inputValue;
let sound = new Audio("../asset/sound.wav");

function range() {
    inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
}

function playSound() {
    sound.currentTime = 0;
    sound.play();
 }

input.addEventListener("input", range);