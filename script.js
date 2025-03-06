const addBtn = document.getElementById('addButton');
const input = document.getElementById('task');
const list = document.getElementById('task-list');

// Function to add task
const addTask = () => {
    const task = input.value;
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"><span class="task-text">${task}</span><span class="delete">&times;</span>`;
        list.appendChild(li);
        input.value = '';
    }
};

addBtn.addEventListener('click',addTask);

// Add task on Enter key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        addTask();
    }
});


list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (e.target.type === 'checkbox') {
        e.target.nextElementSibling.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    }
});