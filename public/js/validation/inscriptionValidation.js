let validationForm = document.querySelector("#registration_form");

// Validation process
validationForm.addEventListener("submit", function(e)
{
    let errors = document.querySelector(".errors");
    errors.innerHTML = "";

    let inputEmail = document.querySelector("#registration_form_email");
    let inputPassword = document.querySelector("#registration_form_plainPassword");

    // TODO: Compléter les regex pour les rendre plus précises
    let regexEmail = /^[\w\.]+@[\w]+\.[a-z]+$/;
    let regexPassword = /^[\w\.\*\/\?\-\!\%]{8,}$/

    // Email validation
    if (inputEmail.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Email' ne peut pas être vide";
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
        error.textContent = "Le champ 'Mot de passe' ne peut pas être vide";
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
    else if (!regexPassword.test(inputPassword.value.trim()))
    {
        let error = document.createElement("p");
    error.textContent = "Attention, seuls les caractères spéciaux suivants sont disponibles pour la création de votre mot de passe : [.*/?-!%]";
        errors.appendChild(error);
        e.preventDefault();
    }

})

// Validation password

let currentPassword = document.querySelector("#registration_form_plainPassword");
let validationLength = document.querySelector("#registration-password-length");
let validationSpecialCharacters = document.querySelector("#registration-password-special-characters");
let validationNumber = document.querySelector("#registration-password-number");
let validationUppercase = document.querySelector("#registration-password-uppercase");

function passwordValidation (e)
{
    validationLength.classList.remove("input-correct");
    validationLength.classList.remove("input-incorrect");

    PasswordLength = e.target.value.length;

    if (PasswordLength >= 8)
    {
        validationLength.classList.add("input-correct")
    } else
    {
        validationLength.classList.add("input-incorrect")
    }
}

currentPassword.addEventListener('keyup', passwordValidation);