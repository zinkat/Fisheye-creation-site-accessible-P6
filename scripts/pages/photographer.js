//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
//let PhotographerName = params.get('name'); 
let id = parseInt(params.get('id'));


async function getPhotographers() {
    // récuperation du tableau datas
        let response = await fetch("./data/photographers.json");
        //console.log(response);
        const datas = await response.json();
        //console.log(datas);
        return datas;
};

    
async function displayDataPhotographer(photographers) {
    //création section pour affiche les carte photographe
    const photographersSection = document.querySelector(".photograph-header");

    //boucle pour récuperer les photographes
    photographers.forEach((photographer) => {
        if (photographer.id===id){
            console.log(photographer, photographer.name);
        const photographerModel = PhotographerFactoryDetail(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        }
    });   
};
 
// function PhotographerName(photographers) {
//     photographers.forEach((photographer) => {
//         if (photographer.id===id){
//             console.log(photographer.name);
//             PhotographerName = photographer.name;
//         }
//     });
//     return PhotographerName;
// };

    async function displayMediaPhotographer(medias) {
        //création section pour affiche les carte photographe
       // const photographersMediaSection = document.querySelector(".photographermedia_section");
       let totalLikes = 0;
        //boucle pour récuperer les photographes
        medias.forEach((media) => {
            if (media.photographerId==id){
            const mediaModel = mediaPhotographerFactory(media);
            const userCardMedia = mediaModel.getUserCardMedia();
            totalLikes = totalLikes + media.likes;
            //console.log(media.likes);
           // photographersMediaSection.appendChild(userCardMedia);
            }
        });
        //console.log(totalLikes);
        const Likes = countLikes(totalLikes);
    };


    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        const { media } = await getPhotographers();
       // const photographername = PhotographerName(photographers)
        //console.log(photographername);
        displayDataPhotographer(photographers);
        displayMediaPhotographer(media);
        // displayMediaPhotographer(medias);
      
    };
    
    init();
   
