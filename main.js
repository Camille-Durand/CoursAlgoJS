function calculer() {
    let getPrice = document.getElementById("prixHt");
    let priceArticle = getPrice.value;
    let getQuantity = document.getElementById("quantite");
    let quantityArticle = getQuantity.value;

    let TTC = priceArticle*1.20*quantityArticle;

    const result = document.querySelector('p');
    result.textContent = "Le prix TTC est de " + TTC.toFixed(2) + "€";
}