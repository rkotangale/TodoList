//define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
    //DOM load event
    //document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit',addTask);

    //remove task event
    taskList.addEventListener('click',removeTask);

    //clear task event
    clearBtn.addEventListener('click',clearTasks);

    //filter task event\
    filter.addEventListener('keyup',filterTasks);
}

//get tasks function
/*function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') == null) {
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');

        //add class
        li.className = 'collection-item';

        //create text node and append to li
        li.appendChild(document.createTextNode(task));

        //create new link element
        const link = document.createElement('a');

        //add class
        link.className = 'delete-item secondary-content';

        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //append the link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
    });
}*/

//addTask function
function addTask(e) {
    if(taskInput.value == '') {
        alert('Add a Task');
    }

    //create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link element
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //tasks store in local storage
    //storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

//task store to local storage function
/*function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') == null) {
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}*/

// remove task function
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear tasks function
function clearTasks() {
    /* taskList.innerHTML = '';
    we can use this also to remove elements but this not the faster way */

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//filtertasks function
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    
    });
}