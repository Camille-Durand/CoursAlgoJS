// demande nbr int prompt
// affiche table multi de ce nbr
// ... c'est tout en fait

function table() {
    let start = parseInt(prompt("De quel nombre veux-tu connaître la table de multiplication?"));
    console.log("Table de",start);

    for(let i = 0; i < 11; i++) {
        console.log(start,"x",i,"=",start*i);
    }

}