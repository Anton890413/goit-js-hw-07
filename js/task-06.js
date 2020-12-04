const input = document.querySelector('#validation-input');

const validValue = Number(input.dataset.length);

function validation() {

  if (input.value.length === validValue) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else if (input.value.length === 0) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};

input.addEventListener('blur', validation);





