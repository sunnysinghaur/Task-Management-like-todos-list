document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="buttons">
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="toggleComplete(this)">Done</button>
            </div>
        `;

        taskList.appendChild(newTask);

        taskInput.value = '';
        taskInput.focus();
    }
}

function toggleComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    const currentText = taskText.textContent;

    taskText.innerHTML = `
        <input type="text" class="edit-input" value="${currentText}">
        <button class="save" onclick="saveTask(this)">Save</button>
    `;

    button.style.display = 'none';
}

function saveTask(button) {
    const taskItem = button.parentElement.parentElement;
    const editInput = taskItem.querySelector('.edit-input');
    const newText = editInput.value.trim();

    if (newText !== '') {
        taskItem.querySelector('.task-text').textContent = newText;
        button.parentElement.querySelector('.edit').style.display = 'inline';
        button.parentElement.removeChild(editInput);
        button.parentElement.removeChild(button);
    }
}
