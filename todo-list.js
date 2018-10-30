function makeTask(task) {
    const html = /*html*/
    <li class="task">
        <h3 class="name" style="background: ${task.color};">
            ${task.name}
        </h3>
           {/* add image here - why is it adding curly braces? It won't  */}
        {/* let me delete them... */ */}
        <img src="assets/${task.image ? task.image : 'nameofimagefile.jpg'}">
        {/* I think I've done a few things wrong here */ */}
            {/* the example doesn't have a closing img tag...</img>} */}

        <button class="danger">X</button>  
    </li>;

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

        // Marty's note says to do work of finding elements _before_ appending, 
        // but I'm not clear on what that points me to do here...
   
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