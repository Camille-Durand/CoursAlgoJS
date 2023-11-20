function tourDeTab() {
    let tab = [];
    let negatif = 0;
    let positif = 0;
    let absolu = 0;
    let tour = parseInt(prompt("Cmb de nombre:"));
    if(tour <=0) {
        console.log("Nope");
    } else {
        for(let i = 0; i < tour; i++) {
            let nbr = prompt("Gimme un nombre:");
            tab.push(nbr);
        }
        for(let j = 0; j < tab.length; j++) {
            if(tab[j] >= 0) {
                positif++;
                if(absolu < tab[j]) {
                    absolu = tab[j];
                }
            } else if (tab[j] < 0) {
                negatif++;
            }
        }
        console.log(tab);
        console.log("Nbr de valeurs positives:",positif);
        console.log("Nbr de valeurs négatives:",negatif);
        console.log("Max valeur absolue:",absolu);
    }
}
