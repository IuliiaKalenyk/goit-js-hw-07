const input = document.querySelector('#font-size-control');
console.log(input);
const span = document.querySelector('#text');
console.log(span);

input.addEventListener('input',fontSizeControl);

function fontSizeControl(event) {
span.style.fontSize = `${event.currentTarget.value}px`
}