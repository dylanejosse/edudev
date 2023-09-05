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