import { Category } from '../types/types.js'

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log('general')
  } else if (category === Category.OPTIONAL) {
    console.log('optional')
  } else if (category === Category.REQUIRED) {
    console.log('required')
  } else {
    const never: never = category
    console.log(never)
  }
}

const renderCategories = (
  categories: Category[],
  categoryContainer: HTMLUListElement,
  selectedCategory: Category
) => {
  categoryContainer.innerHTML = ''
  categories.forEach((category) => {
    const categoryElement: HTMLLIElement = document.createElement('li')
    const radio: HTMLInputElement = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'category'
    radio.id = radio.value = category
    radio.checked = category === selectedCategory

    const label: HTMLLabelElement = document.createElement('label')
    label.innerText = category
    label.setAttribute('for', category)

    categoryElement.appendChild(radio)
    categoryElement.appendChild(label)
    categoryContainer.appendChild(categoryElement)

    if (category === selectedCategory) {
      handleCategoryChange(category)
    }
  })
}

export default renderCategories
