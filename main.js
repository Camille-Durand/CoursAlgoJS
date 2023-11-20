let mot1 = prompt("1er mot:");
let mot2 = prompt("2e mot:");
let mot3 = prompt("3e mot:");

function AlphaWords(){
    let result = '';

    if(mot1 <= mot2 && mot2 <= mot3) { // 123
        result = "Ils sont dans l'ordre alphabétique."
        console.log("Ils sont dans l'ordre alphabétique.");
        document.getElementById("response").style.color = "green";
    } else { // autres cas
        result = "Ils ne sont pas dans l'ordre alphabétique."
        console.log("Ils ne sont pas dans l'ordre alphabétique.");
        document.getElementById("response").style.color = "orange";
    }

    document.body.innerHTML = document.body.innerHTML.replace("?", result);
}