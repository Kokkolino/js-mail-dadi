let checkEmail;
let checkPassword;
let checkBox;
var mailformat = `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`;

document.getElementById('signInButton').addEventListener('click', signIn);

function signIn(){
    checkBox = document.getElementById("signInCheck").checked;
    checkEmail = document.getElementById("signInEmail").value;
    checkPassword = document.getElementById("signInPassword").value;
    if(checkBox == false){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">You must agree with the terms to sign in!</div>`
    }
    else if(checkEmail == ""){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">You have entered an invalid email address!</div>` 
    }
    else if(checkPassword >= 8 && checkPassword <= 20){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>`
    }
    else{
        let userCredentials = [checkEmail, checkPassword]
        
    }
}

