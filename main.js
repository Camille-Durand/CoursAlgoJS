class CompteBancaire {
    nom;
    compte;
    constructor(newNom,newCompte) {
        this.nom = newNom;
        this.compte = newCompte;
    }
    
    credit(moneyPlus) {
        this.compte += moneyPlus;
        return "Ajout de " + moneyPlus + "€ au compte de " + this.nom;
    }

    retrait(moneyMoins) {
        try {
            this.verifyCompte(moneyMoins);
        } catch (e) {
            console.error(e);
            return;
        }
        this.compte -= moneyMoins;
        return "Retrait de " + moneyMoins + "€ au compte de " + this.nom;
    }

    visu() {
        return "\nLe compte de " + this.nom + " est à " + this.compte + "€";
    }

    virement(gens2,somme) { //celui qui reçoit l'argent, la thune
        console.log("Tentative de virement de",somme,"€ de", this.nom,"à",gens2.nom);
        
        try {
            this.verifyVirement(somme)
        } catch (e) {
            console.error(e);
            return;
        }

        this.compte -= somme;
        gens2.compte += somme;
        return "Virement effectué avec succès.";
    }

    verifyCompte(argent) {
        if (argent>this.compte) {
            throw new Error("! ! ! Retrait annulé " + this.nom + " car impossible de retirer " + argent + "€ sur un compte à seulement " + this.compte + "€ ! ! !");
        }
    }

    verifyVirement(argent) {
        if (argent>this.compte) {
            throw new Error("! ! ! Virement annulé " + this.nom + " car impossible de faire un virement de " + argent + "€ sur un compte à seulement " + this.compte + "€ ! ! !");
        }
    }

}

const bank = new CompteBancaire;
const alex = new CompteBancaire("Alex",0);
const clovis = new CompteBancaire("Clovis",0);
const marco = new CompteBancaire("Marco",0);

let tab = [alex,clovis,marco];


console.log(alex.credit(1000),alex.visu());
console.log(clovis.credit(1000),clovis.visu());
console.log(marco.credit(1000),marco.visu());
console.log(alex.retrait(100),alex.visu());
console.log(marco.virement(clovis,300),clovis.visu(),marco.visu());
console.log(alex.retrait(600),alex.visu());
console.log(alex.visu(),clovis.visu(),marco.visu());
console.log("Comptes clients:",tab);

console.log("----- ---- --- -- -");
console.log("Tests try & catch:")
console.log(alex.retrait(1200));
console.log(marco.virement(clovis,1500));