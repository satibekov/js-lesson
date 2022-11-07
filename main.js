
const TodoListTasks = [];

var todoListAddBtn = document.getElementById('todo-list-task-add-btn');
var todoListElement = document.getElementById('todo-list');

todoListAddBtn.addEventListener('click', AddTodo)

function AddTodo() {
    var todoListTaskText = document.getElementById('todo-list-task-text').value;
    console.log(todoListTaskText)
    AddTodoViewModel(todoListTaskText);
    RenderViewModel();
}

function AddTodoViewModel(text){
  var newTodo = {
    Id: TodoListTasks.length + 1,
    Text: text,
    IsCompleted: false,
  };
  TodoListTasks.push(newTodo);
}

function CreateTodoListTaskComponent (task) {
  return `
  <li>
    <span>
      <input type="checkbox" id="todolist-checkbox-${task.Id}">
      <label for="todolist-checkbox-${task.Id}">${task.Text}</label>
    </span>
    <button class="todolist-remove-todo">Удалить</button>
  </li>
  `
}

function RenderViewModel(){
  var todoListRenderInfo = "";
  for (var task of TodoListTasks){
    todoListRenderInfo = todoListRenderInfo.concat(CreateTodoListTaskComponent(task));
  }
  todoListElement.innerHTML = todoListRenderInfo;
}




