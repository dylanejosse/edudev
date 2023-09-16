let validationForm = document.querySelector("#registration_form");

//TODO: Vérifier si les regex sont complètes
let regexEmail = /^[\w\.]+@[\w]+\.[a-z]+$/;
let specialCharacters = /[\W]/;

let currentPassword = document.querySelector("#registration_form_plainPassword");
let validationLength = document.querySelector("#registration-password-length");
let validationSpecialCharacters = document.querySelector("#registration-password-special-characters");
let validationNumber = document.querySelector("#registration-password-number");
let validationUppercase = document.querySelector("#registration-password-uppercase");
let validationLowercase = document.querySelector("#registration-password-lowercase");

// Submit Validation process
validationForm.addEventListener("submit", function(e)
{
    let errors = document.querySelector(".errors");
    errors.innerHTML = "";

    let inputEmail = document.querySelector("#registration_form_email");
    let inputPassword = document.querySelector("#registration_form_plainPassword");

    // Email validation
    if (inputEmail.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Veuillez renseigner une adresse mail";
        errors.appendChild(error);
        e.preventDefault();
    } 
    else if (!regexEmail.test(inputEmail.value.trim()))
    {
        let error = document.createElement("p");
        error.textContent = "Veuillez renseigner une adresse mail valide";
        errors.appendChild(error);
        e.preventDefault();
    }

    // Password validation
    if (inputPassword.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Veuillez renseigner un mot de passe";
        errors.appendChild(error);
        e.preventDefault();
    } 
    else if (inputPassword.value.length < 8)
    {
        let error = document.createElement("p");
        error.textContent = "Votre mot de passe doit contenir au moins 8 caractères";
        errors.appendChild(error);
        e.preventDefault();
    }
    else if (!specialCharacters.test(inputPassword.value.trim()))
    {
        let error = document.createElement("p");
        error.textContent = "Attention, votre mot de passe doit contenir au moins 1 caractère spécial";
        errors.appendChild(error);
        e.preventDefault();
    }
    else if (!(/[A-Z]/g).test(inputPassword.value.trim()))
    {
        let error = document.createElement("p");
        error.textContent = "Attention, votre mot de passe doit contenir au moins une majuscule";
        errors.appendChild(error);
        e.preventDefault();
    }
    else if (!(/[a-z]/g).test(inputPassword.value.trim()))
    {
        let error = document.createElement("p");
        error.textContent = "Attention, votre mot de passe doit contenir au moins une minuscule";
        errors.appendChild(error);
        e.preventDefault();
    }
    else if (!(/[0-9]/g).test(inputPassword.value.trim()))
    {
        let error = document.createElement("p");
        error.textContent = "Attention, votre mot de passe doit contenir au moins un chiffre";
        errors.appendChild(error);
        e.preventDefault();
    }

})

// Validation password
function passwordValidation (e)
{
    let actualPassword = e.target.value

    validationLength.classList.remove("input-correct");
    validationLength.classList.remove("input-incorrect");

    PasswordLength = actualPassword.length;

    // Length validation
    if (PasswordLength >= 8)
    {
        validationLength.classList.add("input-correct")
    } else
    {
        validationLength.classList.add("input-incorrect")
    }

    // One uppercase minimum
    if ((/[A-Z]/g).test(actualPassword))
    {
        validationUppercase.classList.add("input-correct")
        validationUppercase.classList.remove("input-incorrect")
    } else 
    {
        validationUppercase.classList.remove("input-correct")
        validationUppercase.classList.add("input-incorrect")
    }

    if ((/[a-z]/g).test(actualPassword))
    {
        validationLowercase.classList.add("input-correct")
        validationLowercase.classList.remove("input-incorrect")
    } else 
    {
        validationLowercase.classList.remove("input-correct")
        validationLowercase.classList.add("input-incorrect")
    }

    // One number minimum
    if ((/[0-9]/g).test(actualPassword))
    {
        validationNumber.classList.add("input-correct")
        validationNumber.classList.remove("input-incorrect")
    } else 
    {
        validationNumber.classList.remove("input-correct")
        validationNumber.classList.add("input-incorrect")
    }

    // One special character minimum
    if (specialCharacters.test(actualPassword))
    {
        validationSpecialCharacters.classList.remove("input-incorrect")
        validationSpecialCharacters.classList.add("input-correct")
    } else 
    {
        validationSpecialCharacters.classList.remove("input-correct")
        validationSpecialCharacters.classList.add("input-incorrect")
    }

}

currentPassword.addEventListener('keyup', passwordValidation);