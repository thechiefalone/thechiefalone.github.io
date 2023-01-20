let todoBtn = document.querySelector(".todo__btn");
let todoInput = document.querySelector(".todo__input");
let todoList = document.querySelector(".todo__list");

todoBtn.addEventListener("click", addTodo);

// Add Task with Enter 
document.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addTodo();
    }
});

function addTodo(){
    let todoItem = document.createElement("p");
    todoItem.classList.add("todo__item");
    todoItem.innerText = todoInput.value;

    todoList.appendChild(todoItem);

    if(todoInput.value === ""){
        swal("Please enter a task !!!");
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