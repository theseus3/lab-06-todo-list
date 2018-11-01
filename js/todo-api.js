let tasks = [
    {
        task: 'thing1',
        date: 'datestamp1'
    },
    {
        tast: 'thing2',
        date: 'datestamp2'
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function customParser(key, value) {
   // if(key !== 'due') return value;
   // return new Date('10/30/2018'),
//};

const tasksApi = {
    getAll() {
        const json = localStorage.getItem('tasks');
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
        const index = tasks.indexOf(task);
        if(index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    }
};
export default tasksApi;