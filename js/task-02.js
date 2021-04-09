const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const navEl = ingredients.map(ingredient => {
  const nameIngradients = document.createElement('li');
  nameIngradients.textContent = ingredient;
  console.log(nameIngradients);
   return nameIngradients;
});
const elementUl = document.querySelector('#ingredients');
elementUl.append(...navEl);
 
