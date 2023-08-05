/* Toggle's actions */
let toggleOwner = document.querySelector("#switchProjectOwnerLabel");
let toggleParticipant = document.querySelector("#switchProjectParticipantLabel");

let ownerUsers = document.querySelector(".owner-features");
let participantUsers = document.querySelector(".participant-features");

/* Display Owner informations */
function handleToggleOwner()
{
    ownerUsers.classList.remove("d-none");
    participantUsers.classList.add("d-none");
}

/* Display Participant informations */
function handleToggleParticipant()
{
    ownerUsers.classList.add("d-none");
    participantUsers.classList.remove("d-none");
}

/* Listeners */
toggleOwner.addEventListener('click', handleToggleOwner);
toggleParticipant.addEventListener('click', handleToggleParticipant);
