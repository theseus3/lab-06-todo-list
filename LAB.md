Lab 06: Todo List
===

Build a todo list app! 

## User stories

User wants to:

* see list of todos (saved in `localStorage`) when page is loaded
* add a new todo (via form) that is saved and new DOM added to page
* See the todo displayed differently if it is overdue
* remove a todo (via click) so that saved data is updated and DOM removed from page
* STRETCH: complete a todo (via click) so that saved data updated and class is changed on DOM to visually show completion

## Project Structure

* assets
    * _any images or other media assets_
* css
    * `add-todo.css` - _css specific to new todo component_
    * `styles.css` - _shared css_
    * `todo-list.css` - _css specific to todo list component_
* js
    * `add-todo.js` - _component for new todo_
    * `app.js` - _main entry point_
    * `todo-api.js` - _methods for data_
    * `todo-list.js` - _component for todo list_
* `.eslintrc` - _class eslint with `source-type: "module"`_
* `.travis.yml` - _run linting on travis_
* `index.html` - _html document_
* `README.md` - _info about project_

## Data Model

Each todo looks like:

```js
{ 
    task: 'Finish lab',
    due: new Date('10/30/2018'),
    /* STRETCH Goal: */
    done: false
}
```

Notice we need to add the string date using the `Date` constructor.

## More on Dates

When you get to the requirement to show overdue dates differently, you will likely run into an issue that dates get saved in JSON as strings and not dates. In order to "revive" them back into dates, you can add the following helper function and pass it to `JSON.parse`:

```js

function customParser(key, value) {
    if(key !== 'due') return value;
    return new Date(value);
}

// later in your code, you can use JSON.parse like:
const saved = localStorage.getItem('todos');
if(saved) {
    todos = JSON.parse(saved, customParser);
}
```

## Process

1. Design your page with static html
1. Build components in stepwise fashion, for example:
    * `app` calls `addTodo.init` passing in `onAdd` callback function
    * `addTodo.init` subscribes to `<form>` submit event passing in callback function that creates a new todo object (remember to use `new Date()` to turn the string from the `<input type="date">` into an actual `Date`)
    * `addTodo` calls `onAdd` with new todo
    * `app` 
        * receives new todo in `onAdd` callback, and
        * calls `todoList.add` with new todo
    * `todoList` uses template to create DOM for new todo. (HINT: compare `new Date()` for "now" against `todo.due` to conditionally add class using a `ternary` expression)
    * `todoList` adds DOM for new todo to `<ul>` parent
    * `app` also calls `todoApi.add` with new todo in `onAdd` before calling `todoList.add`
    * `todoApi.add` adds the todo to `todos` array and saves `todos` array to `localStorage`
    * Add `todoList.getAll` which loads `todos` from `localStorage`
    * Call `todoList.getAll` in `app` and pass to `todoList.init`
    * In `todoList.init`, loop the passed `todos` and call `todoList.add` for each one
    * `app` adds `onRemove` callback function passed to `todoList.init`, store the callback function as `todoList.onRemove`
    * Add code in `todoList.add` that 
        * `querySelect`'s the `<li>` and the remove `<button>`.
        * pass callback function to remove button click that
            * calls `todoList.onRemove` with the `todo` to remove
            * calls the `remove` method on the `<li>`
    * `app` 
        * receives todo to remove in `onRemove` callback, and
        * calls `todoApi.remove` with todo to remove
    * `todoApi.remove` finds the todoToRemove in `todos` array and removes it, then saves the `todos` array in `localStorage`

## Required for Grading

1. Passes TravisCI
1. Meaningful commit history evidencing incremental approach
1. Deployed to GH Pages

## Rubric

* Good (clean and sematic) use of HTML and CSS **2pts**
* Template (including conditional "overdue" class) **1pt**
* Add a new todo (form and update display) **2pts**
* Remove a todo (button and update display **2pts**
* Modular JavaScript using component pattern **2pts**
* Project folder/file consistent and clean **1pt**





 

