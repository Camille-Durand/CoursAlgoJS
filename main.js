function prixTTC() {
    let result = '';

    let getArticle = document.getElementById("article");
    let nameArticle = getArticle.value;
    let getPrice = document.getElementById("price");
    let PriceArticle = getPrice.value;
    let getQuantity = document.getElementById("quantity");
    let quantityArticle = getQuantity.value;

    let tab = [nameArticle,PriceArticle,quantityArticle];
    console.log(tab);

    let TTC = PriceArticle*1.20*quantityArticle;
    console.log(TTC);
    document.body.innerHTML = document.body.innerHTML.replace("?", TTC);
}