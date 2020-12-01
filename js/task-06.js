const input = document.querySelector('#validation-input');

function validation() {
    if (input.value.length < input.dataset.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}
input.addEventListener('blur', validation);

