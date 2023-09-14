/*
DELIVERABLES
------------
As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
Add a dropdown to the form in HTML file
  - the task in the list is red for high, yellow for medium, green for low
Add any additional field to the form and see its effect in the list
*/

document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  const form = document.querySelector('#create-task-form');
  const tasks = document.querySelector('#tasks');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.createElement("li");
    newTask.textContent = e.target["new-task-description"].value;
    newTask.id = "task" + i; // bad indexing system, but example of how to use this
    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton" + i;
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });
    deleteButton['textContent'] = 'X';
    
    const dropdown = document.querySelector("#dropdown");
    if (dropdown.value === 'high'){
      newTask.style.backgroundColor = 'red';
    }
    if (dropdown.value === 'medium'){
      newTask.style.backgroundColor = 'yellow';
    }
    if (dropdown.value === 'low'){
      newTask.style.backgroundColor = 'green';
    }

    newTask.append(deleteButton);
    tasks.appendChild(newTask);
    i++;
  });
});


/**
STRETCH DELIVERABLES
--------------------
- A delete function that will remove tasks from your list
- A priority value selected from a [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
    - As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
- An additional input field (e.g. user, duration, date due)
- Ability to edit tasks
- Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM 
**/