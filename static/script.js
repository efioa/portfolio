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

	let dayone = new Date(year, month, 1).getDay();

	
	let lastdate = new Date(year, month + 1, 0).getDate();

	
	let dayend = new Date(year, month, lastdate).getDay();

	
	let monthlastdate = new Date(year, month, 0).getDate();

	
	let lit = "";

	
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
	// with the current month and year
	currdate.innerText = `${months[month]} ${year}`;

	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();


prenexIcons.forEach(icon => {

	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		if (month < 0 || month > 11) {
            
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
		manipulate();
	});
});


document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.getElementById("current-date");
    const entryContent = document.querySelector("textarea");
    const saveEntryButton = document.getElementById("save-entry");
    const previousEntryButton = document.getElementById("previous-entry");
    const nextEntryButton = document.getElementById("next-entry");

    // Function to save the journal entry
    saveEntryButton.addEventListener("click", function() {
        const currentDate = new Date();
        currentDateElement.textContent = currentDate.toDateString();
    });

    // Function to navigate to the previous entry
    previousEntryButton.addEventListener("click", function() {
       
    });

    // Function to navigate to the next entry
    nextEntryButton.addEventListener("click", function() {
    
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.getElementById("current-date");
    const entryContent = document.querySelector("textarea");
    const saveEntryButton = document.getElementById("save-entry");
    const previousEntryButton = document.getElementById("previous-entry");
    const nextEntryButton = document.getElementById("next-entry");

    // Function to save the journal entry
    saveEntryButton.addEventListener("click", function() {
        const currentDate = new Date();
        const entryDate = currentDate.toDateString();
        const entryText = entryContent.value;

        // Check if local storage is supported by the browser
        if (typeof(Storage) !== "undefined") {
            // Save the entry to local storage
            localStorage.setItem(entryDate, entryText);
        } else {
            alert("Local storage is not supported by your browser.");
        }
    });

    // Function to load the current entry
    function loadCurrentEntry() {
        const currentDate = new Date();
        const entryDate = currentDate.toDateString();
        
        if (typeof(Storage) !== "undefined") {
            // Check if an entry exists for the current date
            if (localStorage.getItem(entryDate)) {
                entryContent.value = localStorage.getItem(entryDate);
            } else {
                entryContent.value = ""; // No entry for today
            }
        } else {
            alert("Local storage is not supported by your browser.");
        }
    }

    // Function to navigate to the previous entry
    previousEntryButton.addEventListener("click", function() {
   
    });

    // Function to navigate to the next entry
    nextEntryButton.addEventListener("click", function() {
    
    });
    loadCurrentEntry();
});
