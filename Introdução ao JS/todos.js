var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var inputElement = document.querySelector('#app button');

var todos = [
 'Fazer café',
 'Estudar Javascript',
 'Acessar comunidade da Rocketseat'
];

function renderTodos() {
listElement.innerHtml = '';


    for (todo of todos) {
        console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.Value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

