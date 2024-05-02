function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        var li = document.createElement('li');
        li.textContent = taskValue;
        li.onclick = toggleTask;
        document.getElementById('pendingTasks').appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask() {
    if (this.classList.contains('completed')) {
        this.classList.remove('completed');
        document.getElementById('pendingTasks').appendChild(this);
    } else {
        this.classList.add('completed');
        document.getElementById('completedTasks').appendChild(this);
    }
}