let tasks = [
    {
        name: 'Groceries',
        // If the user enters the tasks, I'm not totally clear about what I would put here
    },
    {
        name: 'BatheDog',
        color: 'gray'
        image: 'Max.jpg'
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taks));
}

// should this be tasksApi or todoApi? And if it's wrong here, all else?
const tasksApi = {
    getAll() {
        const json = localStorage.getItem('fruits');
        if(json) {
            tasks = JSON.parse(json);
        }
        return tasks;
    },
    add(task) {
        tasks.push(task);
        saveTasks();
    },
    remove(task) {
        const index = tax.indexOf(task);
        if(index !== -1) {
            fruits.splice(index, 1);
            saveFruits();
        }
    }
};

export default tasksApi;