class Employee {
    nom;
    prenom;
    age;
    salaire;
    mois;
    charges;
    constructor(newNom,newPrenom,newAge,newSalaire,newMois,newCharges) {
        this.nom = newNom;
        this.prenom = newPrenom;
        this.age = newAge;
        this.salaire = newSalaire;
        this.mois = newMois;
        this.charges = newCharges;
    }

    calculPayeAnnuelle() {
        let payeAnnuelle = this.salaire * this.mois;
        return this.prenom + ": " + this.salaire + "€ par mois, soit " + payeAnnuelle + "€.";
    }

    calculCharges() {
        let payeCharges = this.salaire * this.charges;
        return this.prenom + ": " + this.salaire + "€ par mois, soit " + payeCharges + "€ de charges.";
    }
}

class PME {
    nom;
    equipe;
    revenus;
    fraisFixes;
    fraisAchats;
    constructor(newNom,newEquipe,newRevenus,newFraisFixes,newFraisAchats) {
        this.nom = newNom;
        this.equipe = newEquipe;
        this.revenus = newRevenus;
        this.fraisFixes = newFraisFixes;
        this.fraisAchats = newFraisAchats;
    }

    calculFrais() {
        let frais = this.revenus - (this.fraisFixes + this.fraisAchats);
        return "L'entreprise '" + this.nom + "', qui a des revenus de " + this.revenus + "€ sans les frais:\n-> " + frais + "€ avec les frais.";
    }

}

const Jon = new Employee("John","Jon",35,2000,12,0.1);
const Jack = new Employee("Jak","Jack",29,3000,12,0.1);
const Jean = new Employee("Gens","Jean",47,4000,12,0.1);

console.log(Jon.calculPayeAnnuelle());
console.log(Jon.calculCharges());

console.log(Jack.calculPayeAnnuelle());
console.log(Jack.calculCharges());

console.log(Jean.calculPayeAnnuelle());
console.log(Jean.calculCharges());

const Entreprise = new PME("Enter the Price",3,3000000,200000,50000);

console.log(Entreprise.calculFrais());