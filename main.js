const input = document.querySelectorAll('input');
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
let goodEmail = 0;
let goodPW = 0;

document.getElementById("email").addEventListener("keyup", listenerEmail);
function listenerEmail() {
    let contentEmail = document.getElementById('email').value;
    console.log(contentEmail);
    if(regexEmail.test(contentEmail) == true) {
        console.log("True");
        input[0].style.backgroundColor = 'green';
        goodEmail = 1;
    } else {
        console.log("False");
        input[0].style.backgroundColor = 'red';
        goodEmail = 0;
    }
}

document.getElementById("password").addEventListener("blur", listenerPW);
function listenerPW() {
    let contentPW = document.getElementById('password').value;
    if(regexPassword.test(contentPW) == true) {
        console.log("True");
        input[1].style.backgroundColor = 'green';
        goodPW = 1;
    } else {
        console.log("False");
        input[1].style.backgroundColor = 'red';
        goodPW = 0;
    }
}

function good() {
    let error = document.getElementById('error');
    if(goodEmail == 1 && goodPW == 1) {
        error.textContent = 'Mail & Mdp valides';
        console.log("1");
    } else {
        error.textContent = 'Mail et/ou Mdp invalides'
        console.log("0");
    }
}
