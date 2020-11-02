const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => outputName.textContent = inputName.value.length > 0 ? inputName.value : "незнакомец");
