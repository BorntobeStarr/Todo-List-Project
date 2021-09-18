// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// ADD event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener ('click', filterTodo);

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
    // //ADDTODO TO LOCALSTORAGE
    // saveLocalTodos(todoInput.value);
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
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    //Check Mark
    if (item.classList[0]=== 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//Filter TODO LIST 
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                todo.style.display = "flex";
                }
                else{
                todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                todo.style.display = "flex";
                }
                else{
                todo.style.display = "none";
                }
            break;

        }
    });
}

