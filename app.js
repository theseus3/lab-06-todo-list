import addTask from './add-todo.js';
import taskList from './todo-list.js';
import taskApi from './todo-api.js';

const tasks = taskApi.getAll();

taskList.init(tasks, function(task) {
    taskApi.remove(task);
});

addTask.init(function(task) {
    
    taskApi.add(task);

    taskList.add(task);

});


/* this is for tracking tasks the user adds, but I need to figure 
out how to datestamp their entries */




// I'm adding this way too early
// I am supposed to wait until I've got basic functionality before worrying about this

// function customParser(key, value) {
    // if(key !== 'due') return value;
    // return new Date(value);
// }

// later in your code, you can use JSON.parse like:
// const saved = localStorage.getItem('todos');
// if(saved) {
    // todos = JSON.parse(saved, customParser);
// }