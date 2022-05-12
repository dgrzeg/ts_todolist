const renderCategories = (categories, categoryContainer, selectedCategory) => {
    categoryContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'category';
        radio.id = radio.value = category;
        radio.checked = category === selectedCategory;
        const label = document.createElement('label');
        label.innerText = category;
        label.setAttribute('for', category);
        categoryElement.appendChild(radio);
        categoryElement.appendChild(label);
        categoryContainer.appendChild(categoryElement);
    });
};
export default renderCategories;
