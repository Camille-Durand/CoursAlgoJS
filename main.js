let age = parseInt(prompt("Donnes un âge:"));

function verifyAge() {
    let result = '';
    if(age<6) {
        console.log("Hors catégorie");
        result = "Hors catégorie";
    } else if (age==6 || age ==7) {
        console.log("Poussin");
        result = "Poussin";
    } else if (age==8 || age==9) {
        console.log("Pupille");
        result = "Pupille";
    } else if (age==10 || age==11) {
        console.log("Minime");
        result = "Minime";
    } else if (age>=12) {
        console.log("Cadet");
        result = "Cadet";
    }
    document.body.innerHTML = document.body.innerHTML.replace("?", result);
}