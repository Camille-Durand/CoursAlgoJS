let nbr1 = parseInt(prompt("Saisir le 1 nombre"));
let nbr2 = parseInt(prompt("Saisir le 2 nombre"));

//afficher dans la console si le produit est négatif
function multipli(){
    let somme = nbr1 * nbr2;
    let result = '';

    if(somme == 0) {
        console.log("Le produit est 0!")
        result = "Le produit est 0!";
    } else {
        if(nbr1>0 && nbr2>0) {
            console.log("Le produit est positif!");
            result = "Le produit est positif!";
        } else if (nbr1<0 && nbr2<0) {
            console.log("Le produit est positif!");
            result = "Le produit est positif!";
        } else if (nbr1<0 && nbr2>0 || nbr1>0 && nbr2<0) {
            console.log("Le produit est négatif!");
            result = "Le produit est négatif!";
        }
    }
    document.body.innerHTML = document.body.innerHTML.replace("?", result);
}