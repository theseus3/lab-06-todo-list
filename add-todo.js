const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const task = {
                name: elements.name.value,
                color: elements.color.value,
                image: elements.image.value
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTask;