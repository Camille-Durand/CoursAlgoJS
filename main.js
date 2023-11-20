let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note"));
   notes.push(note);
}
// calculer la moyenne de notes et l'afficher dans la console 
function moyenne() {
    let somme = 0;
    for(let i = 0; i < nombre; i++) {
        somme += notes[i];
    }
    let moy = somme/nombre;

    console.log("Notes:",notes);
    console.log("Moyenne des notes:",moy,"/20");

    if(moy == 20){
        document.getElementById("result").style.color = 'blue';
    } else if (moy >= 16) {
        document.getElementById("result").style.color = 'green';
    } else if (moy >= 10) {
        document.getElementById("result").style.color = 'olive';
    } else if (moy >= 5) {
        document.getElementById("result").style.color = 'orange';
    } else if (moy >= 1) {
        document.getElementById("result").style.color = 'red';
    } else if (moy == 0) {
        document.getElementById("result").style.color = 'gray';
    }  else if (moy < 0) {
        document.body.innerHTML = document.body.innerHTML.replace("NaN / 20", "Pas de moyenne négative possible");
    }

    document.body.innerHTML = document.body.innerHTML.replace("NaN", moy);
}
