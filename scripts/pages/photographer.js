//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
//let PhotographerName = params.get('name'); 
let id = parseInt(params.get('id'));


async function getPhotographers() {
    // récuperation du tableau datas
        let response = await fetch("./data/photographers.json");
        //console.log(response);
        const datas = await response.json();
        //console.table(datas.photographers);
        //console.table(datas.media);

        return datas;
};
   
async function displayDataPhotographer(photographers) {
    //création section pour affiche les carte photographe
    const photographersSection = document.querySelector(".photograph-header");

    //boucle pour récuperer les photographes
    photographers.forEach((photographer) => {
        if (photographer.id===id){
           // console.log(photographer, photographer.name);
        const photographerModel = PhotographerFactoryDetail(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);

        }
    });   
};

    async function displayMediaPhotographer(medias) {
        //création section pour affiche les carte photographe
    let totalLikes = 0;

    
        //boucle pour récuperer les photographes
        medias.forEach((media) => {
            if (media.photographerId==id){
            const mediaModel = mediaPhotographerFactory(media);
            const userCardMedia = mediaModel.getUserCardMedia();
            //total likes
            totalLikes = totalLikes + media.likes 
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

    /////// ********ajouter des likes  onclick********///////
    let parentLikes = document.querySelectorAll('.infoPhoto')
    let popUpLikes = document.querySelector('.TotalLikes')

  // bouclé sur les media du photographer
    parentLikes.forEach(function(child){
        let totalLikesPhoto = child.childNodes[1].textContent;
        let countLike = 0; 
        const once = {once: true};// ecouter l'evenement une seul fois
       // ecouter l'evenement
        child.childNodes[2].addEventListener('click', function(){
            countLike = countLike + 1;
            child.childNodes[1].textContent = parseInt(totalLikesPhoto) + countLike;

            //mise à jour ttl likes dans la balise
            totalLikes = parseInt(popUpLikes.textContent) + countLike;
            popUpLikes.textContent = `${totalLikes}` ; 
        }, once);
//////keyboard ecouter le clavier
        child.childNodes[2].addEventListener('keydown', function(e){
           if(e.key === "Enter"){                              
            countLike = countLike + 1;
            child.childNodes[1].textContent = parseInt(totalLikesPhoto) + countLike;

            //mise à jour ttl likes dans la balise
            totalLikes = parseInt(popUpLikes.textContent) + countLike;
            popUpLikes.textContent = `${totalLikes}` ; 
           }
        }, once);

    })

      /////// ********trier les medias select********///////            
    let selectOrder = document.querySelector('.orderSelect');
    selectOrder.addEventListener("change", function(){
        const triMedia = Array.from(media)
        const optionValue = selectOrder.value
        
        //list media par photgrapher
        let MediaPhtgr =[];
        let i=0;
        triMedia.forEach((med)=> {
            if (med.photographerId == id){
                MediaPhtgr[i] = med
                i++;
            }
        }
        )
        //filtre par Likes
            if (optionValue === "populaire") {
                MediaPhtgr.sort((a, b) => {
                    return b.likes - a.likes;
                    }); 
                    
            }
        //filtre par Date 
            if (optionValue === "date") {
                MediaPhtgr.sort((a, b) => {
                        return new Date(a.date) - new Date(b.date);         
                    });
                    console.table(MediaPhtgr);
            
                    }
        //filtre par titre
            if (optionValue === "title") {
                MediaPhtgr.sort((a, b) => {     
            if (a.title < b.title) {
                return -1;
            }

            if (a.title > b.title) {
                return 1;
            }
            return 0;
            });  
            }            

            const photographerMediaSection = document.querySelector(".photographermedia_section")
            photographerMediaSection.innerHTML = "";  
            infoPrixAvis = document.querySelector("aside");
            likesDOM = document.querySelector(".TotalLikes");
            likesDOM.remove(); 
            iconHeart = document.querySelector(".iconHeart")
            iconHeart.remove(); 
            displayMediaPhotographer(MediaPhtgr);
            

            //intergration du tri dans la Lightbox
            document.querySelectorAll(".div_media").forEach( lightBoxCard => {
            lightBoxCard.addEventListener("click", (e) =>{
                
                const lightBxMedia = Array.from(media)
                
                //list media par photgrapher
                let MediaPhtgr =[];
                let i=0;
                lightBxMedia.forEach((med)=> {
                    if (med.photographerId == id){
                        MediaPhtgr[i] = med
                        i++;
                    }
                }
                )
                console.log(MediaPhtgr);

            let lightBox = new LightBox(MediaPhtgr)
            lightBox.show(e.currentTarget.dataset.id);

                })
            }) 
            //fin lighbox tri
    })

    ////////////////*************light Box************///////////
    document.querySelectorAll(".div_media").forEach( lightBoxCard => {
      lightBoxCard.addEventListener("click", (e) =>{
        const bodyPhotographer = document.getElementById("main");
        bodyPhotographer.style.display = "none";
        const lightBxMedia = Array.from(media)
     
        //list media par photgrapher
        let MediaPhtgr =[];
        let i=0;
        lightBxMedia.forEach((med)=> {
            if (med.photographerId == id){
                MediaPhtgr[i] = med
                i++;
            }
        }
        )
        console.log(MediaPhtgr);

      let lightBox = new LightBox(MediaPhtgr)
      lightBox.show(e.currentTarget.dataset.id);

          })

      //KeyUp ecouter l'evenement clavier
          lightBoxCard.addEventListener("keydown", (e) =>{
           if(e.key === "Enter"){
            const lightBxMedia = Array.from(media)
            const bodyPhotographer = document.getElementById("main");
            bodyPhotographer.style.display = "none";
         
            //list media par photgrapher
            let MediaPhtgr =[];
            let i=0;
            lightBxMedia.forEach((med)=> {
                if (med.photographerId == id){
                    MediaPhtgr[i] = med
                    i++;
                }
            }
            )
            console.log(MediaPhtgr);
    
          let lightBox = new LightBox(MediaPhtgr)
          lightBox.show(e.currentTarget.dataset.id);
        }
            
    
              })
      })    


};

init();
   

