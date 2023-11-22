function addTask() {
    let getDiv = document.getElementById('tasks');

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

function delAllTask() {
    const all = document.getElementById('tasks');

    while(all.hasChildNodes()) {
        all.removeChild(all.firstChild);
    }
}

let statut = true;
function updateTask(e) {
    if(statut == true) {
        const getValue = e.parentNode.firstChild.value;
        console.log(getValue);
        const input = document.createElement('input');
        input.type = "text";
        e.parentNode.replaceChild(input,e.parentNode.firstChild);
        input.value = getValue;
        statut = false;

    } else {
        const getValueFalse = e.parentNode.firstChild.value;
        let paraFalse = document.createElement('p');
        e.parentNode.replaceChild(paraFalse,e.parentNode.firstChild);
        paraFalse.textContent = getValueFalse;
        statut = true;
    }
}


function reload() {
    window.location.reload();
}