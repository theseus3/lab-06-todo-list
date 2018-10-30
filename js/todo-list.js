function makeTask(task) {
    const html = /*html*/`
   
    <li class="todo">
        <h3 class="name">
            ${task.name}, ${task.date}
        </h3>

        <button class="danger">X</button>  
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('tasks');

const taskList = {
    init(tasks, onRemove) {
        for(let i = 0; i < tasks.length; i++) {
            taskList.add(tasks[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(task) {
        const dom = makeTask(task);

    // add(date) {
        // const dom = makeDate(date);
    
 
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};
export default taskList;