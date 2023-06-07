function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var task = todoInput.value.trim();
  if (task !== "") {
    var listItem = document.createElement("li");
    listItem.innerHTML =
      task +
      '<button type="button" class="deleteOption" onclick="deleteTask(this)">Delete </button>';
    document.getElementById("todoList").appendChild(listItem);
    todoInput.value = "";
  }
}

function deleteTask(taskItem) {
  var listItem = taskItem.parentNode;
  var todoList = listItem.parentNode;
  todoList.removeChild(listItem);
}
