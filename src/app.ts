import { Category, Task } from './types/types.js'
import renderTasks from './helpers/render-tasks.helper.js'
import renderCategories from './helpers/render-categories.helper.js'
import tasks from './data/tasks.js'
import categories from './data/categories.js'

let selectedCategory: Category = Category.GENERAL

const tasksContainer: HTMLUListElement = document.querySelector('.tasks')
const categoryContainer: HTMLUListElement =
  document.querySelector('.categories')
const taskInput: HTMLInputElement = document.querySelector('#name')
const buttonAdd = document.querySelector('button')

const addTask = (task: Task) => {
  tasks.push(task)
}

tasksContainer.addEventListener('change', (e) => {
  if (!e.target) return
  const tar = e.target as HTMLInputElement
  const checkbox: HTMLInputElement = tar.closest('input[type="checkbox"]')
  const i: number = +checkbox.id.split('-')[1]
  tasks[i].done = checkbox.checked
})

categoryContainer.addEventListener('change', (e) => {
  if (!e.target) return
  const tar = e.target as HTMLInputElement
  const radio: HTMLInputElement = tar.closest('input[type="radio"]')
  selectedCategory = radio.value as Category
})

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault()
  addTask({ name: taskInput.value, done: false, category: selectedCategory })
  renderCategories(categories, categoryContainer, selectedCategory)
  renderTasks(tasks, tasksContainer)
})

renderCategories(categories, categoryContainer, selectedCategory)
renderTasks(tasks, tasksContainer)
