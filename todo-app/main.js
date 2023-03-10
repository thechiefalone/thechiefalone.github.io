let todoBtn = document.querySelector(".todo__btn");
let todoInput = document.querySelector(".todo__input");
let todoList = document.querySelector(".todo__list");

todoBtn.addEventListener("click", addTodo);

// Add Task with Enter 
todoInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addTodo();
    }
});

function addTodo(){
    let todoItem = document.createElement("p");
    todoItem.classList.add("todo__item");
    let todoItemSpan = document.createElement("span");
    todoItem.appendChild(todoItemSpan);
    todoItemSpan.innerText = todoInput.value;

    todoList.appendChild(todoItem);

    if(todoInput.value === ""){
        swal("Please enter a task !!!");
        todoList.removeChild(todoItem);
    }else{
        todoInput.value = "";
    }

    todoItem.addEventListener("click", function(){
        todoItem.style.textDecoration="line-through";

        todoItem.addEventListener("click", function(){
            todoList.removeChild(todoItem);
        });
    });
};