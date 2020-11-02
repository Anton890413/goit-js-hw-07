let value = 0;
const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');


const pushBtnDecrement = () => { return (counterValue.textContent = value -= 1); };
const pushBtnIncrement = () => { return (counterValue.textContent = value += 1); };


btnDecrement.addEventListener('click', pushBtnDecrement);
btnIncrement.addEventListener('click', pushBtnIncrement);
