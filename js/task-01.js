const categoryList = document.querySelector('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);


categoryList.forEach(category => {
    const categoryTitle = category.querySelector(`h2`).textContent;
    const categoryElements = category.querySelectorAll(`ul li`);
    console.log('Category: ${categoryTitle}');
    console.log('Elements: ${categoryElements.length}');
});