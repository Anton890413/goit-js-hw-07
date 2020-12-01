let value = 0;
const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');


const pushBtnDecrement = () => { (counterValue.textContent = value -= 1); };
const pushBtnIncrement = () => { (counterValue.textContent = value += 1); };


btnDecrement.addEventListener('click', pushBtnDecrement);
btnIncrement.addEventListener('click', pushBtnIncrement);
