class Animal {
    //attributs
    espece;
    pattes;
    age;
    taille;
    poids;
    //Contructeur
    constructor(newEspece,newPattes,newTaille,newPoids) {
        this.espece = newEspece;
        this.pattes = newPattes;
        this.taille = newTaille;
        this.poids = newPoids;
    }
}

const chien = new Animal("chien",4,50,9);
const coq = new Animal("coq",2,40,3);
const tigre = new Animal("tigre",4,180,180);
const chat = new Animal("chat",4,30,5);

console.log(chien);
console.log(coq);
console.log(tigre);
console.log(chat);

function crier() {
    let cri = "";

    let getAnimalCri = document.getElementById("animalCri");
    let animalCriValue = getAnimalCri.value;

    if(animalCriValue == chien.espece) {
        cri = "Ouaf!";
    } else if (animalCriValue == coq.espece) {
        cri = "Cocorico!";
    } else if (animalCriValue == tigre.espece) {
        cri = "Grrrr!";
    } else if (animalCriValue == chat.espece) {
        cri = "Miaou!";
    } else if (animalCriValue == "") {
        cri = "Pas d'animal, pas de cri";
    } else {
        cri = "On a pas cet animal malheureusement :(";
    }
    //return cri;
    console.log(cri);
}

function dormir() {
    console.log("Zzzzzzzzzzzzzzzzz");
}

function addAnimal() {
    let getSpecies = document.getElementById("species");
    let speciesValue = getSpecies.value;

    let getPaws = document.getElementById("paws");
    let pawsValue = getPaws.value;

    let getHeight = document.getElementById("height");
    let heightValue = getHeight.value;

    let getWeight = document.getElementById("weight");
    let weightValue = getWeight.value;

    const nouveau = new Animal(speciesValue,pawsValue,heightValue,weightValue);
    console.log(nouveau);
    document.body.innerHTML = document.body.innerHTML.replace("#", "Nouvel animal ajouté!");
}