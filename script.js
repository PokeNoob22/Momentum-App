document.getElementById("tasksIcon").addEventListener("click", function() {
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.style.display = taskContainer.style.display === "none" ? "block" : "none";
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent empty tasks

    // Create elements
    const listItem = document.createElement("div");
    listItem.classList.add("task-item");

    const label = document.createElement("label");
    label.textContent = taskText;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = function() {
        label.classList.toggle("completed");
    };

    // Append elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear input
    toggleTaskContainer(); // Show task container
}

// Function to remove the last task
function removeLastTask() {
    const taskList = document.getElementById("taskList");

    if (taskList.children.length > 0) {
        taskList.removeChild(taskList.lastChild);
        toggleTaskContainer();
    }
}

// Function to toggle task container visibility
function toggleTaskContainer() {
    const taskContainer = document.getElementById("taskContainer");
    const taskList = document.getElementById("taskList");

    if (taskList.children.length === 0) {
        taskContainer.style.display = "none";
    } else {
        taskContainer.style.display = "block";
    }
}

document.getElementById("addButton").addEventListener("click", addTask);
document.getElementById("removeButton").addEventListener("click", removeLastTask);


function editName() {
    let header = document.querySelector(".header");
    let name = document.querySelector("#name");
    header.textContent = `Good Evening, ${name.value}`;
}

document.getElementById("editButton").addEventListener("click", editName);

// let time = document.getElementById("time");

// let date = new Date();

// console.log(date.getHours());
// console.log(date.getMinutes());
// time.textContent = `${date.getHours()}:${date.getMinutes()}`;

function updateTime() {
    let now = new Date();
    
    let hours = now.getHours() % 12 || 12;
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let ampm = now.getHours() >= 12 ? "PM" : "AM"; 
    
    document.getElementById("time12").textContent = `${hours}:${minutes} ${ampm}`;
}

// Update clock every second
setInterval(updateTime, 1000);
updateTime();




const quotes = [
    "Time is gold",
    "Time is money",
    "Time is everything",
    "Time is short"
];

// Function to update the quote display
function updateQuoteDisplay(newQuote) {
    document.getElementById("randomQuote").textContent = newQuote;
}

// Function to add a new quote
function addNewQuote() {
    const quoteInput = document.getElementById("quoteInput");
    const newQuote = quoteInput.value.trim();

    if (newQuote) {
        quotes.push(newQuote);
        updateQuoteDisplay(newQuote);
        quoteInput.value = ""; // Clear input
        toggleQuoteInput(); // Hide input field after adding
    }
}

// Function to toggle the quote input field
function toggleQuoteInput() {
    const quoteInputContainer = document.getElementById("quoteInputContainer");
    quoteInputContainer.style.display = 
        quoteInputContainer.style.display === "none" ? "block" : "none";
}

// Attach event listeners
document.getElementById("quoteIcon").addEventListener("click", toggleQuoteInput);
document.getElementById("addQuoteButton").addEventListener("click", addNewQuote);

// Show the first default quote on page load
updateQuoteDisplay(quotes[quotes.length - 1]);


function toggleFocusInput() {
    const focusInputContainer = document.getElementById("focusInputContainer");
    focusInputContainer.style.display = 
        focusInputContainer.style.display === "none" ? "block" : "none";
}


function saveFocus() {
    const focusInput = document.getElementById("focusInput");
    const focusDisplay = document.getElementById("focusDisplay");
    const newFocus = focusInput.value.trim();

    if (newFocus) {
        focusDisplay.textContent = `Focus of the Day: ${newFocus}`;
        focusDisplay.classList.remove("hidden"); // Show focus text
        focusInputContainer.style.display = "none"; // Hide input field
        focusInput.value = ""; // Clear input
    }
}

document.getElementById("displayName").addEventListener("click", function editName() {
    let nameSpan = this;
    let currentName = nameSpan.textContent;

    let input = document.createElement("input");
    input.type = "text";
    input.value = (currentName === "Click to Enter Name") ? "" : currentName;
    input.id = "nameInput";

    nameSpan.replaceWith(input);
    input.focus();

    input.addEventListener("blur", saveName);
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            saveName();
        }
    });

    function saveName() {
        let newName = input.value.trim() || "Click to Enter Name";
        let newSpan = document.createElement("span");
        newSpan.id = "displayName";
        newSpan.textContent = newName;

        // Reattach the click event listener
        newSpan.addEventListener("click", editName);

        input.replaceWith(newSpan);
    }
});



document.getElementById("focusIcon").addEventListener("click", toggleFocusInput);
document.getElementById("saveFocusButton").addEventListener("click", saveFocus);

