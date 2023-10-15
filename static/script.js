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

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// Function to generate the calendar
const manipulate = () => {

	// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	// Get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	// Get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	// Get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		lit += `<li class="${isToday}">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element 
	// with the formatted current month and year
	currdate.innerText = `${months[month]} ${year}`;

	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {

			// Set the date to the first day of the 
			// month with the new year
			date = new Date(year, month, new Date().getDate());

			// Set the year to the new year
			year = date.getFullYear();

			// Set the month to the new month
			month = date.getMonth();
		}

		else {

			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to 
		// update the calendar display
		manipulate();
	});
});
