import { Category } from '../types/types.js';
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log('general');
    }
    else if (category === Category.OPTIONAL) {
        console.log('optional');
    }
    else if (category === Category.REQUIRED) {
        console.log('required');
    }
    else {
        const never = category;
        console.log(never);
    }
};
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
        if (category === selectedCategory) {
            handleCategoryChange(category);
        }
    });
};
export default renderCategories;
