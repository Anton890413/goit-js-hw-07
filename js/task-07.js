const inputMeaning = document.querySelector('#font-size-control');

const span = document.querySelector('#text');

const fontSizeChanger = function (event) {
    span.style.fontSize = event.currentTarget.value + 'px';
};

inputMeaning.addEventListener('input', fontSizeChanger);

