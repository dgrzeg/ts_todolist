const tasksContainer = document.querySelector('.tasks');
const categoryContainer = document.querySelector('.categories');
const taskInput = document.querySelector('#name');
const buttonAdd = document.querySelector('button');
const categories = ['general', 'required', 'optional'];
const tasks = [
    { name: 'Learn TS', done: false },
    { name: 'Learn Vue', done: true, category: 'required' },
    { name: 'Learn Nuxt', done: false, category: 'optional' },
    { name: 'Sleep', done: false, category: 'optional' },
    { name: 'Eat', done: false, category: 'general' },
];
const renderCategory = () => {
    categoryContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'category';
        radio.id = radio.value = category;
        const label = document.createElement('label');
        label.innerText = category;
        label.setAttribute('for', category);
        categoryElement.appendChild(radio);
        categoryElement.appendChild(label);
        categoryContainer.appendChild(categoryElement);
    });
};
const render = () => {
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const label = document.createElement('label');
        label.innerText = task.name;
        const id = `task-${index}`;
        label.setAttribute('for', id);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = task.name;
        checkbox.id = id;
        checkbox.checked = task.done;
        // checkbox.addEventListener('change', () => {
        //   task.done = !task.done
        // })
        taskElement.appendChild(label);
        taskElement.appendChild(checkbox);
        tasksContainer.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
tasksContainer.addEventListener('change', (e) => {
    if (!e.target)
        return;
    const checkbox = e.target;
    const i = +checkbox.id.split('-')[1];
    tasks[i].done = checkbox.checked;
    render();
});
buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskInput.value, done: false });
    render();
});
renderCategory();
render();
