const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const nameIngradients_1 = document.createElement('li');
nameIngradients_1.textContent = 'Картошка';
const nameIngradients_2 = document.createElement('li');
nameIngradients_2.textContent = 'Грибы';
const nameIngradients_3 = document.createElement('li');
nameIngradients_3.textContent = 'Чеснок';
const nameIngradients_4 = document.createElement('li');
nameIngradients_4.textContent = 'Помидоры';
const nameIngradients_5 = document.createElement('li');
nameIngradients_5.textContent = 'Зелень';
const nameIngradients_6 = document.createElement('li');
nameIngradients_6.textContent = 'Приправы';

const navEl = document.querySelector('#ingredients');
navEl.append(nameIngradients_1, nameIngradients_2, nameIngradients_3,
nameIngradients_4, nameIngradients_5, nameIngradients_6);
