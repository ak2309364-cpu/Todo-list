const input = document.querySelector('.input-box input');
const addButton = document.querySelector('.btn-add');
const tasksBox = document.querySelector('.tasks-box');
const remainsTask = document.querySelector('.remain-tasks');

let tasks = [];

function renderTasks(){
    tasksBox.innerHTML = '';
    tasks.forEach((t,idx) => {
        const html =  `<div class="task-item">
                <div>
                    <input type="checkbox" name="" id="input">
                    <label for="input">${t}</label>
                </div>
                <div>
                    <button class=" btn btn-delete" data-index="${idx}">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
             </div>`;
             
                tasksBox.insertAdjacentHTML('afterbegin',html)
                
    })
        updateRemainsTasks();
    };

    function updateRemainsTasks(){
        remainsTask.innerHTML = `remain tasks ${tasks.length}`;
    }

addButton.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value.trim() !== ''){
        tasks.push(input.value);
        input.value = '';
        input.focus();
        console.log(tasks);
        renderTasks();
    }
});
    
tasksBox.addEventListener('click', function(e){
    const deleteBtn = e.target.closest('.btn-delete');
    if(deleteBtn){
        const index = deleteBtn.getAttribute('data-index');
        tasks.splice(index, 1);
        renderTasks();
    }
});