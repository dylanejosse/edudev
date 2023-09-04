let addProjectForm = document.querySelector("#add_project_form");

addProjectForm.addEventListener("submit", function(e)
{
    let errors = document.querySelector(".errors");
    errors.innerHTML = "";

    let inputName = document.querySelector("#add_project_name");
    let inputSummary = document.querySelector("#add_project_summary");
    let regexName = /^[a-zA-Z0-9-\s]$/

    // trim() permet de supprimer les espaces avant et après l'entrée de l'utilisateur
    if (inputName.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Nom du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
    } 
    else if (!regexName.test(inputName.value))
    {
        let error = document.createElement("p");
        error.textContent = "Pour le nom du projet, seuls les caractères suivants sont autorisés : [a-z] [A-Z] [0-9] [éèàç+'ù-_]";
        errors.appendChild(error);
        e.preventDefault();
    }

    if (inputSummary.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Résumé du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
    } 
}
)