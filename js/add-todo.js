const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const task = {
                name: elements.name.value,
                date: elements.date.value,
            };

            onAdd(task);
            new Date();

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTask;