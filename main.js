function addTask() {
    let getDiv = document.getElementById('tasks');
    // let getTask = document.getElementById('task').value;
    // const para = document.createElement('p');
    // para.textContent = getTask;
    // getDiv.appendChild(para);

    const div = document.createElement('div');
    getDiv.appendChild(div);
    const para = document.createElement('p');
    div.appendChild(para);

    let getTask = document.getElementById('task').value;
    para.textContent = getTask;

    const deleteT = document.createElement('button');
    deleteT.id = "delete";
    deleteT.textContent = "Supprimer la tâche";
    deleteT.setAttribute("onclick", "deleteTask(this)");
    div.appendChild(deleteT);

    const updateT = document.createElement('button');
    updateT.id = "update";
    updateT.textContent = "Update la tâche";
    updateT.setAttribute("onclick", "updateTask(this)");
    div.appendChild(updateT);
}

function deleteTask(e) {
    e.parentNode.remove();
}

function updateTask(e) {
    let newTask = document.getElementById('task').value;
    e.parentNode.firstChild.textContent = newTask;
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