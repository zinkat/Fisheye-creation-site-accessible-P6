/* eslint-disable no-undef */ 
async function getPhotographers() {
  // récuperation des données datas
  let response = await fetch("./data/photographers.json");
  //console.log(response);
  const datas = await response.json();
  //console.log(datas);
  return datas;
}
async function displayData(photographers) {
  // section pour affiche les carte photographe
  const photographersSection = document.querySelector(".photographer_section");

  //boucle pour récuperer les photographes
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  //affichage des photographes
  displayData(photographers);
}

init();
