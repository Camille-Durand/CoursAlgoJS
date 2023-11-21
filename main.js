let getDiv = document.getElementById('tasks');

function addTask() {
    let getTask = document.getElementById('task').value;
    const para = document.createElement('p');
    para.textContent = getTask;
    getDiv.appendChild(para);
    return para;
}

function delAllTask() {
    const all = document.getElementById('tasks');

    while(all.hasChildNodes()) {
        all.removeChild(all.firstChild);
    }
}

function reload() {
    window.location.reload();
}