import { Category } from '../types/types'

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
  })
}

export default renderCategories
