function calculer() {
    const quantity = document.getElementById("quantite");
    const choco = quantity.value;

    const result = document.querySelector('p');

    if (choco == 0) {
        result.textContent = "Veuillez choisir le nombre de chocolatine";
    } else if (choco <0) {
        result.textContent = "Veuillez rentrer une valeur positive";
    } else {
        total = 0;
        if (choco < 10){
            total = 1.4 * choco;
        } else if(choco <= 20) {
            total = 1.4 * 10 + (choco -10)*1.3;
        } else if (choco > 20) {
            total = 1.4 * 10 + (10)*1.3 + (choco -20)*1.2;
        }
        result.textContent = "Le prix à payer est de " + total.toFixed(2) + "€";
    }
}