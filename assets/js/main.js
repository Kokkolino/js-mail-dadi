let checkEmail;
let checkPassword;
let checkBox;
var mailformat = `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`;
let userCredentials = [];
document.getElementById('signInButton').addEventListener('click', signIn);
document.getElementById('loginButton').addEventListener('click', login);
function signIn(){
    checkBox = document.getElementById("signInCheck").checked;
    checkEmail = document.getElementById("signInEmail").value;
    checkPassword = document.getElementById("signInPassword").value;
    let lengthCheck = checkPassword.length;
    if(checkBox == false){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">You must agree with the terms to sign in!</div>`
    }
    else if(checkEmail == ""){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">You have entered an invalid email address!</div>` 
    }
    else if(lengthCheck <= 8 || lengthCheck >= 20){
        document.getElementById('signInAlerts').innerHTML = `<div class="alert alert-danger" role="alert">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>`
    }
    else{
        userCredentials = [checkEmail, checkPassword];
        
        console.log(userCredentials);
        document.getElementById('signInEmail').value = "";
        document.getElementById('signInPassword').value = "";
        document.getElementById("signInCheck").checked = false;
    }
}

function login(){
    let loginEmailCheck = document.getElementById('loginEmail').value;
    let loginPasswordCheck = document.getElementById('loginPassword').value;
    if(userCredentials[0] === loginEmailCheck && userCredentials[1] === loginPasswordCheck){
        document.getElementById('loginAlerts').innerHTML = `<div class="alert alert-success" role="alert">Wonderful! you logged in!</div>`
    }
    else{
        document.getElementById('loginAlerts').innerHTML = `<div class="alert alert-danger" role="alert">Ops! Something went wrong... Sign In if you're a new in our platform or try to again!</div>`
    }
}

    

