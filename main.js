class Gens {
    //attributs
    nom;
    poids;
    taille;
    //Contructeur
    constructor(newNom,newPoids,newTaille){
        this.nom = newNom;
        this.poids = newPoids;
        this.taille = newTaille;
    }
    calculIMC(){
        let IMC = this.poids / (this.taille * this.taille);
        return IMC.toFixed(2);
    } 

    display() {
        console.log("L'IMC de",this.nom,", qui fait",this.taille,"m et",this.poids,"kg, est de",this.calculIMC());
    }
}
const people = new Gens("Steve",85,1.80);
const people2 = new Gens("Freddy",87,1.83);
const people3 = new Gens("Jon",72,1.42);
let list = [people,people2,people3];

const qqn = new Gens("",0,0);

let showing = new Gens;

function listGens() {
    for(let i = 0; i < list.length; i++) {
        showing = list[i];
        showing.display();
    }
}

function ajoutQqn() {
    let getName = document.getElementById("nom");
    let nameValue = getName.value;

    let getWeight = document.getElementById("weight");
    let weightValue = getWeight.value;

    let getHeight = document.getElementById("height");
    let heightValue = getHeight.value;

    qqn.nom = nameValue;
    qqn.poids = weightValue;
    qqn.taille = heightValue;
    console.log(qqn);

    list.push(qqn);
    console.log(list);

    var elem = document.getElementById('plus');
    elem.parentNode.removeChild(elem);
}