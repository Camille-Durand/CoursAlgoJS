function mental() {
    let randomNbr = Math.floor(Math.random() * 100)
    console.log("Nombre random (entre 1 & 100):",randomNbr);
    let find = 0;
    let essai = 0;

    let guess = prompt("Devine le nombre mystère:");
    for(let i = 0; i < 10; i++) {
        if (guess>randomNbr) {
            guess = prompt("Le nombre recherché est plus petit:");
        } else if (guess<randomNbr) {
            guess = prompt("Le nombre recherché est plus grand");
        } else if (guess == randomNbr) {
            essai = i;
            i = 10;
            find = 1;
        }
    }
    if(find == 1) {
        console.log("C'est le nombre mystère :D! Il t'as fallu",essai,"essais.");
    } else if (find == 0) {
        console.log("T'es nul. Va falloir changer de métier.");
    }
}
