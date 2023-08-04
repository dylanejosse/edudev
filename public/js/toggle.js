/* Toggle's actions */
let toggleOwner = document.querySelector("#switchProjectOwnerLabel");
let toggleParticipant = document.querySelector("#switchProjectParticipantLabel");

let ownerUsers = document.querySelector(".owner-features");
let participantUsers = document.querySelector(".participant-features");

function handleToggleOwner()
{
    /* Display Owner informations */
    ownerUsers.classList.remove("d-none");
    participantUsers.classList.add("d-none");
}

function handleToggleParticipant()
{
    /* Display Participant informations */
    ownerUsers.classList.add("d-none");
    participantUsers.classList.remove("d-none");
}

toggleOwner.addEventListener('click', handleToggleOwner);
toggleParticipant.addEventListener('click', handleToggleParticipant);
