const listOfCategories = document.querySelectorAll('.item');
const quantityCategories = listOfCategories.length;
const categories = document.querySelectorAll('h2');
const elementsCategories = document.querySelectorAll('ul');
console.log('В списке', quantityCategories, 'категории.' ); 
console.log('Категория:', categories[0].textContent);
console.log('Количество элементов:', elementsCategories[1].children.length);
console.log('Категория:', categories[1].textContent);
console.log('Количество элементов:', elementsCategories[2].children.length);
console.log('Категория:', categories[2].textContent);
console.log('Количество элементов:', elementsCategories[3].children.length);
