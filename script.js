let passwordConfirmSpace = document.querySelector('input[id="confirm_password"]');
let passwordValidityMessage = document.querySelector('.input-validity-message');
let inputs = document.querySelectorAll('input');

function validatePassword() {
    let passwordInput = document.querySelector('input[name="password"').value;
    let passwordConfirmInput = document.querySelector('input[name="confirm_password"').value;
    let match = (passwordInput === passwordConfirmInput) ? true : false;
    console.log(match);
    return match;
}

passwordConfirmSpace.addEventListener('input', () => {
    if (validatePassword() === false) {
        passwordConfirmSpace.setCustomValidity('Passwords do not match');
        passwordConfirmSpace.reportValidity();
        return false;
    }
    else {
        passwordConfirmSpace.setCustomValidity('');
        return true;
    }
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity() === false) {
            input.classList.add('invalid');
            input.reportValidity();
        }
        else {
            input.classList.remove('invalid');
        }
    })
})