const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = input.dataset.length;

input.addEventListener('blur', onInputBlur);



function onInputBlur(event) {
    const borderColor = event.currentTarget.value.length;
    if (borderColor === +inputLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');;
}
}