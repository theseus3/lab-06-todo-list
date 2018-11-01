import addTask from './add-todo.js';
import taskList from './todo-list.js';
import taskApi from './todo-api.js';

const tasks = taskApi.getAll();

taskList.init(tasks, function(task) {
    taskApi.remove(task);

    addTask.init(function(task) {
        taskList.add(task);
        taskApi.add(task);
    });
});