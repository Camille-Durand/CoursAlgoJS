function getInfos() {
    let result1 = '';
    let result2 = '';
    let result3 = '';

    let getName = document.getElementById("name");
    let nameValue = getName.value;
    let getFirstname = document.getElementById("firstname");
    let firstnameValue = getFirstname.value;
    let getEmail = document.getElementById("email");
    let emailValue = getEmail.value;
    
    let tab = [nameValue,firstnameValue,emailValue];

    console.log(tab);

    result1 = nameValue;
    document.body.innerHTML = document.body.innerHTML.replace("?", result1);
    document.getElementById("nom").style.color = "red";

    result2 = firstnameValue;
    document.body.innerHTML = document.body.innerHTML.replace("?", result2);
    document.getElementById("prenom").style.color = "green";

    result3 = emailValue;
    document.body.innerHTML = document.body.innerHTML.replace("?", result3);
    document.getElementById("mail").style.color = "blue";
}
