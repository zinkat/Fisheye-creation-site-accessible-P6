const bodyPhotographer = document.getElementById("main");
const btnContact = document.querySelector(".contact_button")
const btnClose = document.querySelector(".close")

const firstName = document.getElementById("first");// Champ prénom
const lastName = document.getElementById("last"); // Champ nom
const inputEmail = document.getElementById("email"); // Champ e-mail
const inputText = document.getElementById("txtMsg"); // Champ textarea
const msgError = document.querySelectorAll(".msgError");

const form = document.querySelector(".form")
const formContact =document.querySelector(".submit_button");//button submit
const modal = document.getElementById("contact_modal");

const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Régex pour la validation de l'email
const regexpFirstName = /^[a-zA-Z\s]+$/; // Régex pour la validation du prénom
const regexpLastName = /^[a-zA-Z\s]+$/; // Régex pour la validation du nom de famille

//affichage du modal
btnContact.addEventListener("click",displayModal )
function displayModal() {
	modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false"); // Affichage de la modale
    bodyPhotographer.setAttribute("aria-hidden", "true"); // Masquage du body
  
}

btnClose.addEventListener("click",closeModal )
function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true"); // Affichage de la modale
    bodyPhotographer.setAttribute("aria-hidden", "false"); // Masquage du body
    //btnClose.focus()

};

window.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        if(modal){
            closeModal();
        }
    }
});

form.addEventListener("submit" , function validationInput (event){
    event.preventDefault();

let first = firstName.value;
let last = lastName.value;
let email = inputEmail.value;
let areaText = inputText.value;

   if(regexpFirstName.test(first) == false){
    msgError[0].textContent =  "Veuillez entrer uniquement des lettres pour le prénom."
    console.log(`Erreur : ${ msgError[0].textContent}`);
   }
   if(first.length < 2 ){
    msgError[0].textContent =  "Veuillez entrer au minimum 2 lettres ou plus pour le prénom." 
    console.log(`Erreur : ${ msgError[0].textContent}`);
   }
   if(regexpLastName.test(last) == false){
    msgError[1].textContent = "Veuillez entrer uniquement des lettres pour le nom."
      console.log(`Erreur : ${ msgError[1].textContent}`);
   }
   if(last.length  < 2){
    msgError[1].textContent = "Veuillez entrer au minimum 2 lettres ou plus pour le nom."  
   console.log(`Erreur : ${ msgError[1].textContent}`);
   }
   if(regexpEmail.test(email) == false){
    msgError[2].textContent = "Veuillez entrer une adresse e-mail valide."  
   console.log(`Erreur : ${ msgError[2].textContent}`);
   }

   if(areaText.trim().length < 10){
    msgError[3].textContent = "Veuillez entrer au minimum 10 caractères."  
     console.log(`Erreur : ${ msgError[3].textContent}`);
   }
   else{

    msgError[0].textContent =  ""
    console.log( `prénom  : ${first}`);
    msgError[1].textContent = ""
    console.log( `nom     : ${last}`);
    msgError[2].textContent = ""  
    console.log( `Email   : ${email}`);
    msgError[3].textContent = "" 
    console.log( `Message : ${areaText}`);
   }
});









