import renderTasks from './helpers/render-tasks.helper.js';
import renderCategories from './helpers/render-categories.helper.js';
import tasks from './data/tasks.js';
import categories from './data/categories.js';
let selectedCategory = 'general';
const tasksContainer = document.querySelector('.tasks');
const categoryContainer = document.querySelector('.categories');
const taskInput = document.querySelector('#name');
const buttonAdd = document.querySelector('button');
const addTask = (task) => {
    tasks.push(task);
};
tasksContainer.addEventListener('change', (e) => {
    if (!e.target)
        return;
    const tar = e.target;
    const checkbox = tar.closest('input[type="checkbox"]');
    const i = +checkbox.id.split('-')[1];
    tasks[i].done = checkbox.checked;
});
categoryContainer.addEventListener('change', (e) => {
    if (!e.target)
        return;
    const tar = e.target;
    const radio = tar.closest('input[type="radio"]');
    selectedCategory = radio.value;
});
buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskInput.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainer);
});
renderCategories(categories, categoryContainer, selectedCategory);
renderTasks(tasks, tasksContainer);
