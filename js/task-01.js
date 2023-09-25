const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
