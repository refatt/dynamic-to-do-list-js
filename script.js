document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => {
            li.remove();
        };

        // Append remove button to the list item and list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
