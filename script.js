const breakTask = document.getElementById('break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const ewanTask = document.getElementById('ewan');
const gegeTask = document.getElementById('gege');
const kainanTask = document.getElementById('kainan');
const lastTask = document.getElementById('last');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task_container');
const scheduleContainer = document.querySelector('.schedule_container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up_container');
const noBtn = document.getElementById('btn_no');
const yesBtn = document.getElementById('btn_yes');

const deselect = document.getElementById('deselect');

let selectedColor, active

taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click', openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

deselect.addEventListener('click', deleteTask);


function selectTask(e){
    resetTasks();
    
    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            subject = '<p>CH</p>'
            break
        case 'gym':                               
            activeTask(gymTask, taskColor);
            subject = '<p>ITE<br>6201</p>'
            break
        case 'study':
            activeTask(studyTask, taskColor);
            subject = '<p>IT<br>6314</p>'
            break
        case 'tv':
            activeTask(tvTask, taskColor);
            subject = '<p>ITE<br>6300</p>'
            break
        case 'friends':
            activeTask(friendsTask, taskColor);
            subject = '<p>IT<br>622</p>'
            break
        case 'work':
            activeTask(workTask, taskColor);
            subject = '<p>CS<br>6303</p>'
            break
        case 'ewan':
            activeTask(ewanTask, taskColor);
            subject = '<p>HMRM</p>'
            break
        case 'gege':
            activeTask(gegeTask, taskColor);
            subject = '<p>MEIL<br>2122</p>'
            break
        case 'kainan':
            activeTask(kainanTask, taskColor);
            subject = '<p>Break</p>'
            break
        case 'last':
            activeTask(lastTask, taskColor);
            subject = '<p>CSS<br>2112</p>'
            break
        case 'deselect':
            activeTask(deselectBtn, taskColor);
            subject = '';
            break
    }
}

function setColors(e) {
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = subject;
    }
}


function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

function resetTasks() {
    const allTasks = document.querySelectorAll('.task_name');

    allTasks.forEach((item) =>{
        item.className = 'task_name';
    })
}

function deleteTasks() {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

function openPopup() {
    popUp.style.display = 'flex';
}

function closePopup() {
    popUp.style.display = 'none';
}






