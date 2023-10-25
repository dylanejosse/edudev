let addProjectForm = document.querySelector("#add_project_form");

addProjectForm.addEventListener("submit", function(e)
{

    let errors = document.querySelector(".errors");
    errors.innerHTML = "";

    let inputName = document.querySelector("#add_project_name");
    let inputSummary = document.querySelector("#add_project_summary");
    let inputDescription = document.querySelector("#add_project_description");
    let inputTechnologies = document.querySelector("#add_project_technologies");
    let inputProjectImage = document.querySelector("#add_project_image");
    let inputDuration = document.querySelector("#add_project_duration");
    let inputStudyLevel = document.querySelector("#add_project_study_level");
    let inputNeed = document.querySelector("#add_project_need_description");
    let inputTimeWeek = document.querySelector("#add_project_time_necessary_week");
    let regexName = /^[\w\s]+/

    console.log(inputName.value);

    // trim() permet de supprimer les espaces avant et après l'entrée de l'utilisateur
    if (inputName.value.trim() === "")
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
    else if (regexName.test(inputName.value.trim()) === false)
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

    if (inputSummary.value.trim() === "")
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
    else if (inputSummary.value.trim().length >= 100)
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

    if (inputDescription.value.trim() === "")
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
    else if (inputDescription.value.trim().length < 200) 
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

    if (!inputTechnologies.value === "")
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


    if (inputProjectImage.value === "")
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

    if (inputDuration.value === "")
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

    if (inputStudyLevel.value === "")
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

    if (inputNeed.value.trim() === "")
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
    else if (inputDescription.value.trim().length <= 100) 
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

    if (inputTimeWeek.value === "")
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

let inputProjectSummary = document.querySelector("#project-summary-input");
let projectSummaryCounter = document.querySelector("#project-summary-counter");
projectSummaryCounter.classList.add("input-incorrect");

function projectSummaryCount (e)
{

    projectSummaryCounter.classList.remove("input-correct");
    projectSummaryCounter.classList.remove("input-incorrect")

    projectSummaryCounter.innerHTML = e.target.value.length;

    if (projectSummaryCounter.innerHTML <= 100 && projectSummaryCounter.innerHTML > 0 )
    {
        projectSummaryCounter.classList.add("input-correct")
    } else
    {
        projectSummaryCounter.classList.add("input-incorrect")
    }
}

inputProjectSummary.addEventListener('keyup', projectSummaryCount);

// Project Description Counter

let inputProjectDescription = document.querySelector("#project-description-input");
let projectDescriptionCounter = document.querySelector("#project-description-counter");
projectDescriptionCounter.classList.add("input-incorrect");

function projectDescriptionCount (e)
{

    projectDescriptionCounter.classList.remove("input-correct");
    projectDescriptionCounter.classList.remove("input-incorrect")

    projectDescriptionCounter.innerHTML = e.target.value.length;

    if (projectDescriptionCounter.innerHTML >= 200 && projectDescriptionCounter.innerHTML > 0 )
    {
        projectDescriptionCounter.classList.add("input-correct")
    } else
    {
        projectDescriptionCounter.classList.add("input-incorrect")
    }
}

inputProjectDescription.addEventListener('keyup', projectDescriptionCount);

// Project Need Counter

let inputProjectNeed = document.querySelector("#project-need-input");
let projectNeedCounter = document.querySelector("#project-need-counter");
projectNeedCounter.classList.add("input-incorrect");

function projectNeedCount (e)
{

    projectNeedCounter.classList.remove("input-correct");
    projectNeedCounter.classList.remove("input-incorrect")

    projectNeedCounter.innerHTML = e.target.value.length;

    if (projectNeedCounter.innerHTML >= 100 && projectNeedCounter.innerHTML > 0 )
    {
        projectNeedCounter.classList.add("input-correct")
    } else
    {
        projectNeedCounter.classList.add("input-incorrect")
    }
}

inputProjectNeed.addEventListener('keyup', projectNeedCount);