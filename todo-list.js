function makeTask(task) {
    const html = /*html*/`
    <li class="task">
        <h3 class="name" style="background: ${task.date};">
            ${task.name}
        </h3>
// add image here?
        <img src="assets/${task.image ? task.image : 'nameofimagefile.jpg'}">
// Look here if things won't work

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

    add(date)   {
        const dom = makeDate(date);
    }
   
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });

        //Marty's note = append to <ul> which will empty the fragment
        list.appendChild(dom);
    }
};

export default taskList;