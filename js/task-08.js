const input = document.querySelector('#controls input');
console.log(input); 
const button = document.querySelectorAll('#controls button');
console.log(button);
const buttonRender = button[0];
console.log(buttonRender);
const buttonDestroy = button[1];
console.log(buttonDestroy);
const boxes = document.querySelector('#boxes');
console.log(boxes);

buttonRender.addEventListener('click', createBoxes);

function createBoxes(amount) {
      
    for (let i = 0; i < amount; i += 1) {
        const createsElements = boxes.cteateElement('div');
        createsElements.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        createsElements.style.height = `${30 + 10 * i}px`;
        createsElements.style.width = `${30 + 10 * i}px`;
}
}
