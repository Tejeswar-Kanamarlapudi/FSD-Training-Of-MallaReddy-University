
const btn = document.getElementById('btn');

function isEmailValid(email){
    const atPos = email.indexOf('@'); // first index value 
    const dotPos = email.lastIndexOf('.'); // last index value

    return(
        atPos > 0 && // at least we have one @, but not at start pos
        dotPos > atPos + 1 && // one dot pos, but after a@
        dotPos < email.length -1 // dot must not at last
    )
}

function validateEmail(){
    const email = document.getElementById('email').value;
    const res = document.getElementById('error-message');
    if(isEmailValid(email)){
        res.textContent = 'Valid Email';
    }
    else{
        res.textContent = 'Invaild Email'
    }
}

function isValidPassword(password){
    if(password.length<8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    const specialChar = "@$*#"

    for(let char of password){
        if(char >= 'A' && char <='Z') hasUpper=true;
        else if(char >= 'a' && char <='z') hasLower=true;
        else if(char >= '0' && char <='9') hasDigit=true;
        else if(specialChar.includes(char)) hasSpecial=true;
    }

    return hasUpper&&hasLower&&hasDigit&&hasSpecial;
}

function validatePassword(){
    const password = document.getElementById('password').value;
    const res2 = document.getElementById('error-message2');
    if(isValidPassword(password)){
        res2.textContent = 'Valid Password';
    }
    else{
        res2.textContent = 'Invaild Password';
    }
}

btn.addEventListener('click',()=>{
    validateEmail();
    validatePassword();
});