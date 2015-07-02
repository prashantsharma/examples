angular.module('todoApp', []).controller('TodoListController', function(){
	var todoList = this;
	todoList.todos = [
	{text: 'My first ToDo.', done:false},
	{text: 'My Completed ToTo', done:true}];

	todoList.addTodo=function(){
		todoList.todos.push({text:todoList.todoText, done:false});
		todoList.todoText='';
	};

	todoList.remaining = function(){
		var count = 0;
		angular.forEach(todoList.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoList.archive = function(){
		var oldTodos = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo){
			if(!todo.done)
				todoList.todos.push(todo);
		});
	};
});