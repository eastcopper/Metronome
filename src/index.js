const bpmValue = document.getElementById('bpmValue');
const input = document.getElementById('input');

function range() {
    let inputValue = document.getElementById('input').value;
    bpmValue.innerHTML = `${inputValue} BPM`;
}

input.addEventListener("input", range);