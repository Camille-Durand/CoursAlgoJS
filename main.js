function youngestUser() {
    let users = [];
    let toupiti = 0;

    for(let i = 0; i < 5; i++) {
        const user = {
            "nom": prompt("Saisir le nom:"),
            "prenom": prompt("Saisir le prénom:"),
            "age": prompt("Saisir l'âge:")
        }
        users.push(user);
        if(users[toupiti]["age"]> users[i]["age"]) {
            toupiti = i;
        }
    }

console.log(users);
console.log(users[toupiti]);
}
