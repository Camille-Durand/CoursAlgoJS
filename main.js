class Vehicule {
    //attributs
    nom;
    couleur;
    nbrRoue;
    vitesse;
    //Contructeur
    constructor(newNom,newCouleur,newNbrRoue,newVitesse) {
        this.nom = newNom;
        this.couleur = newCouleur;
        this.nbrRoue = newNbrRoue;
        this.vitesse = newVitesse;
    }

    detect() {
        if(this.nbrRoue == 4) {
            return "C est une voiture.\nNom: "+ this.nom + "\nCouleur: " + this.couleur + "\nNbr de roues: " + this.nbrRoue + "\nVitesse: " + this.vitesse;
        } else if (this.nbrRoue == 2) {
            return "C est une moto.\nNom: "+ this.nom + "\nCouleur: " + this.couleur + "\nNbr de roues: " + this.nbrRoue + "\nVitesse: " + this.vitesse;
        } else {
            return "Aucune idée de quel type de véhicule c'est"
        }
    }

    boost() {
        this.vitesse += 50;
        return "Le véhicule '" + this.nom + "' a été boosté: " + this.vitesse;
    }

    plusRapide() {
        if (this.vitesse > speed) {
            speed = this.vitesse;
            speedName = this.nom;
        }
        return speedName;
    }
}

const voiture = new Vehicule("Mercedes CLK","noir",4,250);
const moto = new Vehicule("Honda CBR","rouge",2,280);
let list = [voiture,moto];

let recup = new Vehicule;

console.log("Test voiture:",voiture.detect());
console.log("Test moto:",moto.detect());

console.log("Test boost:",voiture.boost());

let speed = 0;
let speedName = "";
for (i = 0; i < list.length; i++) {
    recup = list[i]
    recup.plusRapide();
}
console.log("Test +rapide: Le véhicule le + rapide ici est: " + recup.plusRapide());