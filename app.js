// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// //event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// //Functions

function addTodo(event){
    //prevent from from submitting
    event.preventDefault();
    //create todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton= document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check" > </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashButton= document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash" > </i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to List 
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value= "";
}

function deleteCheck(e) {
const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn'){
        // item.remove();
        const todo = item.parentElement;
        todo.remove();
    }

    //Check Mark
    if (item.classList[0]=== 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}