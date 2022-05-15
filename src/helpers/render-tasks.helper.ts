import { Task } from '../types/types.js'

const renderTasks = (tasks: Task[], tasksContainer: HTMLUListElement) => {
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

    taskElement.appendChild(label)
    taskElement.appendChild(checkbox)
    tasksContainer.appendChild(taskElement)
  })
}

export default renderTasks
