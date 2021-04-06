
const buttonValue = document.querySelectorAll("#counter button")
console.log(buttonValue[0]);
console.log(buttonValue[1]);

let spanValue = document.querySelector('#value');
let spanContent = spanValue.textContent;
console.log(spanValue);
console.log(spanContent);

let counterValue = 0;

buttonValue[0].addEventListener('click', decrement);
buttonValue[1].addEventListener('click', increment);


function increment(counter) {
    const values = Object.values(counter);
    for (const value of values) {
        counterValue += value;
        spanValue.innerHTML = `${counterValue}`
    } 
     return counterValue; 
 } 
 console.log(increment([2])); 
 function decrement(counter) {
    const values = Object.values(counter);
    for (const value of values) {
        counterValue -= value;
        spanValue.innerHTML = `${counterValue}`
    }
     return counterValue; 
}
console.log(decrement([2])); 
