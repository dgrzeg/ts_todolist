const tasksContainer = document.querySelector('.tasks') as HTMLUListElement
const taskInput = document.querySelector('#name') as HTMLInputElement
const buttonAdd = document.querySelector('button')

const tasks = [
  { name: 'Learn TS', done: false },
  { name: 'Learn Vue', done: true },
  { name: 'Learn Nuxt', done: false },
]

const render = () => {
  tasksContainer.innerHTML = ''
  tasks.forEach((task, index) => {
    const taskElement: HTMLLIElement = document.createElement('li')

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

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false })
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
  addTask(taskInput.value)
  render()
})

render()
