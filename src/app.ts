const tasksContainer = document.querySelector('.tasks') as HTMLUListElement
const categoryContainer = document.querySelector(
  '.categories'
) as HTMLUListElement
const taskInput = document.querySelector('#name') as HTMLInputElement
const buttonAdd = document.querySelector('button')

interface Task {
  name: string
  done: boolean
  category?: string
}

const categories = ['general', 'required', 'optional']

const tasks: Task[] = [
  { name: 'Learn TS', done: false },
  { name: 'Learn Vue', done: true, category: 'required' },
  { name: 'Learn Nuxt', done: false, category: 'optional' },
  { name: 'Sleep', done: false, category: 'optional' },
  { name: 'Eat', done: false, category: 'general' },
]

const renderCategory = () => {
  categoryContainer.innerHTML = ''
  categories.forEach((category) => {
    const categoryElement: HTMLLIElement = document.createElement('li')
    const radio: HTMLInputElement = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'category'
    radio.id = radio.value = category

    const label: HTMLLabelElement = document.createElement('label')
    label.innerText = category
    label.setAttribute('for', category)

    categoryElement.appendChild(radio)
    categoryElement.appendChild(label)
    categoryContainer.appendChild(categoryElement)
  })
}

const render = () => {
  tasksContainer.innerHTML = ''
  tasks.forEach((task, index) => {
    const taskElement: HTMLLIElement = document.createElement('li')
    if (task.category) {
      taskElement.classList.add(task.category)
    }

    const label: HTMLLabelElement = document.createElement('label')
    label.innerText = task.name
    const id = `task-${index}`
    label.setAttribute('for', id)
    const checkbox: HTMLInputElement = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = task.name
    checkbox.id = id
    checkbox.checked = task.done
    // checkbox.addEventListener('change', () => {
    //   task.done = !task.done
    // })

    taskElement.appendChild(label)
    taskElement.appendChild(checkbox)
    tasksContainer.appendChild(taskElement)
  })
}

const addTask = (task: Task) => {
  tasks.push(task)
}

tasksContainer.addEventListener('change', (e) => {
  if (!e.target) return
  const checkbox = e.target as HTMLInputElement
  const i: number = +checkbox.id.split('-')[1]
  tasks[i].done = checkbox.checked
  render()
})

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault()
  addTask({ name: taskInput.value, done: false })
  render()
})

renderCategory()
render()
