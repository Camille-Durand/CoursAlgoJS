class Perso {
    //attributs
    nom;
    force;
    defense;
    vie;
    //Contructeur
    constructor(newNom,newForce,newDefense,newVie) {
        this.nom = newNom;
        this.force = newForce;
        this.defense = newDefense;
        this.vie = newVie;
    }

    attack(player1,player2) { //attaquant,défenseur
        let degats = player1.force - player2.defense;
        if (degats <= 0) {
            degats = 0;
            console.log("Aucun dégât sur",player2.nom,"!");
        } else if (degats > 0) {
            console.log(player2.nom,"se prends des dégâts!");
        }
        player2.vie -= degats;
    }
}

class Combat {
    nbrTour;
    score1;
    score2;
    constructor(newNbrTour,newScore1,newScore2) {
        this.nbrTour = newNbrTour;
        this.score1 = newScore1;
        this.score2 = newScore2;
    }

    battle() {
        for(let i = 0; i < this.nbrTour; i++) {
            console.log("----- ---- --- -- -");
            console.log("Nombre de tour(s) restant(s):",this.nbrTour-i);
            console.log(joueur1.nom,"attaque!")
            gens.attack(joueur1,joueur2);
            console.log(joueur2.nom,"est à",joueur2.vie,"PV!");
            if(joueur1.vie <=0) {
                i = this.nbrTour;
                this.score1 += 1;
                console.log("----- ---- --- -- -");
                return "Battle terminée!\n" + joueur1.nom + " n'a plus de vie.\n" + joueur2.nom + " a gagné!"
            } else if(joueur2.vie <=0) {
                i = this.nbrTour;
                this.score2 += 1;
                console.log("----- ---- --- -- -");
                return "Battle terminée!\n" + joueur2.nom + " n'a plus de vie.\n" + joueur1.nom + " a gagné!"
            }

            console.log(joueur2.nom,"attaque!")
            gens.attack(joueur2,joueur1);
            console.log(joueur1.nom,"est à",joueur1.vie,"PV!");
            if(joueur1.vie <=0) {
                i = this.nbrTour;
                this.score1 += 1;
                console.log("----- ---- --- -- -");
                return "Battle terminée!\n" + joueur1.nom + " n'a plus de vie.\n" + joueur2.nom + " a gagné!"
            } else if(joueur2.vie <=0) {
                i = this.nbrTour;
                this.score2 += 1;
                console.log("----- ---- --- -- -");
                return "Battle terminée!\n" + joueur2.nom + " n'a plus de vie.\n" + joueur1.nom + " a gagné!"
            }
        }
        if(joueur1.vie > 0 && joueur2.vie > 0) {
            console.log("----- ---- --- -- -");
            return "Match nul!\n" + joueur1.nom + " et " + joueur2.nom + " ont encore de la vie."
        }
    }
}

const joueur1 = new Perso("Mike",5,4,10);
const joueur2 = new Perso("Freddy",9,4,6)

const bataille = new Combat(2,0,0);
let gens = new Perso;

console.log("It's time for a duel!");
console.log(bataille.battle());
console.log("Score de",joueur1.nom,":",bataille.score1);
console.log("Score de",joueur2.nom,":",bataille.score2);