const addBtn = document.getElementById('addButton');
const input = document.getElementById('task');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const task = input.value;
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"><span>${task}</span><span class="delete">&times;</span>`;
        list.appendChild(li);
        input.value = '';
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