// 2 joueurs: la banque & le joueur
// Chacun lance 1 dé à 6 faces
// + que la banque: +1pts joueur
// = que la banque: +2pts joueur
// - que la banque: +1pts banque
// + gros score = gagnant
// afficher les scores

function dice() {
    let user = 0;
    let bank = 0;

    let getTour = document.getElementById("tour");
    let tourValue = getTour.value;

    if(tourValue <= 0) {
        console.log("Veuillez mettre une valeur supérieure à 0");
    } else {
        for(let tour = 1; tour < tourValue; tour++) {
            let diceUser = Math.floor((Math.random() * 6)+1);
            let diceBank = Math.floor((Math.random() * 6)+1);
            console.log("Tour",tour,":\nLa banque a fait:",diceBank,"\nLe joueur a fait:",diceUser);
    
            if(diceUser > diceBank) {
                user += 1;
            } else if (diceUser == diceBank) {
                user += 2;
            } else if (diceUser < diceBank) {
                bank += 1;
            }
        }
        console.log("Totaux:\nJoueur:",user,"pts\nBanque:",bank,"pts");
        document.body.innerHTML = document.body.innerHTML.replace("#",bank);
        document.body.innerHTML = document.body.innerHTML.replace("§",user);

        if(user < bank) {
            console.log("la banque a gagné!")
            document.body.innerHTML = document.body.innerHTML.replace(".","La banque a gagné!");
            document.getElementById("victory").style.color = "orange";
            document.getElementById("scoreBank").style.color = "green";
            document.getElementById("scoreUser").style.color = "red";

        } else {
            console.log("Le joueur a gagné!")
            document.body.innerHTML = document.body.innerHTML.replace(".","Le joueur a gagné!");
            document.getElementById("victory").style.color = "blue";
            document.getElementById("scoreBank").style.color = "red";
            document.getElementById("scoreUser").style.color = "green";
        }
        var elem = document.getElementById('bt');
        elem.parentNode.removeChild(elem);
    }
}
