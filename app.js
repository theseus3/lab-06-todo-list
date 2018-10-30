import addTask from './js/add-todo.js';
import taskList from './js/todo-list.js';
import taskApi from './js/todo-api.js';

const tasks = taskApi.getAll();

taskList.init(tasks, function(task) {
    taskApi.remove(task);

// addTask.init needs to be subscribed to <form> submit event in
// passing in callback function that creates a new task or todo 
// object. 
//new Date() turns the string from the <input 
// type="date"> into an actual Date


    addTask.init(function(task) {
        // addTask.add(task);
        taskList.add(task);
        taskApi.add(task);
    });
});