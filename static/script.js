// script.js

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
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

   
    // Prepare the data to send to the server
    const data = {
        username: email,
        password: password
    };

    // Send data to the server for validation
    fetch('/validate-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            // Redirect to the main page on successful login
            window.location.href = 'main.html';
        } else {
            // Handle unsuccessful login (e.g., display an error message)
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// JavaScript for handling login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;


    // On successful login, redirect to the main page
    window.location.href = 'index.html';
});


// calendar.js
document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.querySelector(".calendar tbody");
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        let date = 1;

        // Clear the previous month's data
        calendarBody.innerHTML = "";

        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    const cell = document.createElement("td");
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cell = document.createElement("td");
                    cell.textContent = date;
                    row.appendChild(cell);
                    date++;
                }
            }

            calendarBody.appendChild(row);
        }
    }

    generateCalendar(currentMonth, currentYear);
});


function generateCalendar(month, year) {

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement("td");
                const dateContainer = document.createElement("div");
                dateContainer.classList.add("date-container");
                const dateElement = document.createElement("span");
                dateElement.classList.add("date");
                dateElement.textContent = date;
                const editBox = document.createElement("input");
                editBox.classList.add("edit-box");
                editBox.value = date;
                dateContainer.appendChild(dateElement);
                dateContainer.appendChild(editBox);
                cell.appendChild(dateContainer);
                row.appendChild(cell);
                date++;
            }
        }

        calendarBody.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const editBoxes = document.querySelectorAll(".edit-box");
    editBoxes.forEach((editBox) => {
        editBox.addEventListener("blur", function () {
            console.log("Saved:", editBox.value);
        });
    });
});
