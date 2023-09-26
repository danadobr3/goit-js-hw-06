const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
    const listItem = document.createElement(`li`);
    listItem.textContent = ingredient;
    listItem.classList.add(`item`);
    ingredientsList.appendChild(listItem);
});