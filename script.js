function addTodo() {
    
    // console.log("addTodo called");
    let inputBox = document.getElementById("input_box");
    // console.log(inputBox);
    let text = inputBox.value;
    // console.log(text);


    let todoItem = document.createElement("div");
    todoItem.className = "todo_item";
    // console.log(todoItem);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className="check";

    let p = document.createElement("p");
    p.className = "todo_item_text";
    p.innerText = text;

    // console.log(p);

    inputCheckbox.onclick = function () {
        // p.style.textDecoration = "line-through";
        if(p.style.textDecoration==="line-through"){
            p.style.textDecoration="unset";
        }
        else{
        p.style.textDecoration = "line-through";

        }

    }

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete_btn";
    deleteButton.innerText = " ";
    deleteButton.onclick=function(){
        todoItem.remove();
    }

    todoItem.appendChild(inputCheckbox);
    todoItem.appendChild(p);
    
    todoItem.appendChild(deleteButton);

    // console.log(todoItem);

    let todoItemsListDiv = document.getElementById("todo_items_list");
    todoItemsListDiv.appendChild(todoItem);


    inputBox.value="";
}
// function change(){
//     document.getElementById("input_box").innerText="What's on your mind?";
// }