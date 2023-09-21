//TODO: Modifier les noms des variables et harmoniser les noms des ids

let editProjectForm = document.querySelector("#edit_project_form");

editProjectForm.addEventListener("submit", function(e)
{
    let errors = document.querySelector(".errors");
    errors.innerHTML = "";

    let editInputName = document.querySelector("#edit_project_name");
    let editInputSummary = document.querySelector("#edit_project_summary");
    let editInputDescription = document.querySelector("#edit_project_description");
    let editInputTechnologies = document.querySelector("#edit_project_technologies");
    let editInputProjectImage = document.querySelector("#edit_project_image");
    let editInputDuration = document.querySelector("#edit_project_duration");
    let editInputStudyLevel = document.querySelector("#edit_project_study_level");
    let editInputNeed = document.querySelector("#edit_project_need_description");
    let editInputStatus = document.querySelector("#edit_project_status");
    let editInputTimeWeek = document.querySelector("#edit_project_time_necessary_week");

    console.log(editInputName);

    //TODO: Ajouter la vérification sur les checkbox
    //TODO: Vérifier cette regex
    let regexName = /^[\w\s]+/

    // trim() permet de supprimer les espaces avant et après l'entrée de l'utilisateur
    if (editInputName.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Nom du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
          
    } 
    else if (regexName.test(editInputName.value.trim()) === false)
    {
        let error = document.createElement("p");
        error.textContent = "Pour le nom du projet, seuls les caractères suivants sont autorisés : [a-z] [A-Z] [0-9]";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputSummary.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Résumé du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    } 
    else if (editInputSummary.value.trim().length >= 100)
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Résumé du projet' doit contenir au maximum 100 caractères";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputDescription.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Description du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    } 
    else if (editInputDescription.value.trim().length < 200) 
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Description du projet' doit contenir au moins 200 caractères.";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputTechnologies.value === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Technologies utilisées sur ce projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputProjectImage.value === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Image de la technologie principale' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputDuration.value === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Durée estimée du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputStudyLevel.value === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Niveau d'études souhaité des participants' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputNeed.value.trim() === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Besoin du projet' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    } 
    else if (editInputDescription.value.trim().length <= 100) 
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Besoin du projet' doit contenir au moins 100 caractères.";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }

    if (editInputTimeWeek.value === "")
    {
        let error = document.createElement("p");
        error.textContent = "Le champ 'Estimation du temps à consacrer au projet par semaine (par participant)' ne peut pas être vide";
        errors.appendChild(error);
        e.preventDefault();
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
    }
}
)

// Project Summary counter

let editInputProjectSummary = document.querySelector("#edit-project-summary-input");
let editProjectSummaryCounter = document.querySelector("#edit-project-summary-counter");
editProjectSummaryCounter.classList.add("input-incorrect");

function editProjectSummaryCount (e)
{

    editProjectSummaryCounter.classList.remove("input-correct");
    editProjectSummaryCounter.classList.remove("input-incorrect")

    editProjectSummaryCounter.innerHTML = e.target.value.length;

    if (editProjectSummaryCounter.innerHTML <= 100 && editProjectSummaryCounter.innerHTML > 0 )
    {
        editProjectSummaryCounter.classList.add("input-correct")
    } else
    {
        editProjectSummaryCounter.classList.add("input-incorrect")
    }
}

editInputProjectSummary.addEventListener('keyup', editProjectSummaryCount);

// Project Description Counter

let editInputProjectDescription = document.querySelector("#edit-project-description-input");
let editProjectDescriptionCounter = document.querySelector("#edit-project-description-counter");
editProjectDescriptionCounter.classList.add("input-incorrect");

function editProjectDescriptionCount (e)
{

    editProjectDescriptionCounter.classList.remove("input-correct");
    editProjectDescriptionCounter.classList.remove("input-incorrect")

    editProjectDescriptionCounter.innerHTML = e.target.value.length;

    if (editProjectDescriptionCounter.innerHTML >= 200 && editProjectDescriptionCounter.innerHTML > 0 )
    {
        editProjectDescriptionCounter.classList.add("input-correct")
    } else
    {
        editProjectDescriptionCounter.classList.add("input-incorrect")
    }
}

editInputProjectDescription.addEventListener('keyup', editProjectDescriptionCount);

// Project Need Counter

let editInputProjectNeed = document.querySelector("#edit-project-need-input");
let editProjectNeedCounter = document.querySelector("#edit-project-need-counter");
editProjectNeedCounter.classList.add("input-incorrect");

function editProjectNeedCount (e)
{

    editProjectNeedCounter.classList.remove("input-correct");
    editProjectNeedCounter.classList.remove("input-incorrect")

    editProjectNeedCounter.innerHTML = e.target.value.length;

    if (editProjectNeedCounter.innerHTML >= 100 && editProjectNeedCounter.innerHTML > 0 )
    {
        editProjectNeedCounter.classList.add("input-correct")
    } else
    {
        editProjectNeedCounter.classList.add("input-incorrect")
    }
}

editInputProjectNeed.addEventListener('keyup', editProjectNeedCount);