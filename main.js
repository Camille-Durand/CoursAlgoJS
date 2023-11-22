//création du tableau
localStorage.getItem('tasks') == null ? localStorage.setItem("tasks", []):false;

function addTask() {
    //le code ci-dessous  : récupére la clé tasks dans le localstorage 
    //et le met à jour avec la valeur saisie dans l'input du formulaire
    //récupération de l'input ('#task)
    let valeur = document.querySelector('#task').value;
    //récupérer dans une variable la valeur clé ('tasks')
    let tasks = localStorage.getItem('tasks');
    //test si la clé tasks dans localstorage est vide
    if(tasks==""){
      tasks+= valeur;
    }
    //test sinon elle n'est pas vide
    else{
        //transforme en tableau
        tasks = tasks.split(",");
        //ajoute la valeur de l'input au tableau
        tasks.push(valeur);
    }
    //mise à jour de la clé
    localStorage.setItem('tasks',tasks);

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

function showAllTasks() {
    let allTasks = localStorage.getItem('tasks').split(',');
    console.log(allTasks);

    for(let i = 0; i < allTasks.length; i++) {
        let getDiv = document.getElementById('tasks');
        const div = document.createElement('div');
        getDiv.appendChild(div);

        const para = document.createElement('p');
        div.appendChild(para);
        para.textContent = allTasks[i];

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
        input.style.marginTop = "15px";
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
