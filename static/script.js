// script.js

//task bar 
const taskInput = document.getElementById('task-input');
const priorityDropdown = document.getElementById('priority-dropdown');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const priority = priorityDropdown.value; 

    if (taskText) {
        const listItem = document.createElement('li');
        
        const prioritySpan = document.createElement('span');
        prioritySpan.classList.add('priority', priority);
        prioritySpan.textContent = `[${priority}]`; 
        
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        listItem.appendChild(prioritySpan);
        listItem.appendChild(taskLabel);
        listItem.appendChild(checkbox);

        
        taskList.appendChild(listItem);

        // Clear the input fields
        taskInput.value = '';
        priorityDropdown.value = 'low'; 
    }
});



  

 




