/* eslint-disable no-undef */ 
let params = new URL(document.location).searchParams;
let id = parseInt(params.get("id"));

async function getPhotographers() {
  // récuperation du  datas
  let response = await fetch("./data/photographers.json");
  const datas = await response.json();
  return datas;
}

async function displayDataPhotographer(photographers) {
  const photographersSection = document.querySelector(".photograph-header");
  //boucle pour récuperer les photographes
  photographers.forEach((photographer) => {
    if (photographer.id === id) {
      const photographerModel = photographerFactoryDetail(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
    }
  });
}

async function displayMediaPhotographer(medias) {
  let totalLikes = 0;
  //boucle pour récuperer les media par photographes
  medias.forEach((media) => {
    if (media.photographerId == id) {
      const mediaModel = mediaPhotographerFactory(media);
      mediaModel.getUserCardMedia();
      //total likes par photographe
      totalLikes = totalLikes + media.likes;
    }
  });
  //console.log(totalLikes);
  countLikes(totalLikes);
}

async function init() {
  const { photographers } = await getPhotographers();
  const { media } = await getPhotographers();
  displayDataPhotographer(photographers);
  displayMediaPhotographer(media);
  addLikes();
  selectMedia(media);
  ligthbox();

  /////// ********trier les medias select********///////
  function selectMedia(media) {
    let selectOrder = document.querySelector(".orderSelect");
    selectOrder.addEventListener("change", function () {
      const triMedia = Array.from(media);
      const optionValue = selectOrder.value;

      //list media par photgrapher
      let MediaPhtgr = [];
      let i = 0;
      triMedia.forEach((med) => {
        if (med.photographerId == id) {
          MediaPhtgr[i] = med;
          i++;
        }
      });
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

      const photographerMediaSection = document.querySelector(
        ".photographermedia_section"
      );
      photographerMediaSection.innerHTML = "";
      infoPrixAvis = document.querySelector("aside");
      likesDOM = document.querySelector(".TotalLikes");
      likesDOM.remove();
      iconHeart = document.querySelector(".iconHeart");
      iconHeart.remove();
      displayMediaPhotographer(MediaPhtgr);
      //intergration de la Lightbox lorsque les medias sont triés.
      ligthbox();
      //liké les photo triées
      addLikes();
    });
  }

  ////////////////*************light Box************///////////
  function ligthbox() {
    document.querySelectorAll(".div_media").forEach((lightBoxCard) => {
      lightBoxCard.addEventListener("click", (e) => {
        const bodyPhotographer = document.getElementById("main");
        const header = document.querySelector(".header");
        bodyPhotographer.style.display = "none";
        bodyPhotographer.setAttribute("aria-hidden", "true");
        header.style.display = "none";

        const lightBxMedia = Array.from(media);
        //list media du photgrapher
        let MediaPhtgr = [];
        let i = 0;
        lightBxMedia.forEach((med) => {
          if (med.photographerId == id) {
            MediaPhtgr[i] = med;
            i++;
          }
        });
        //console.log(MediaPhtgr);

        let lightBox = new LightBox(MediaPhtgr);
        lightBox.show(e.currentTarget.dataset.id);
      });

      /////////////////////KeyUp ecouter l'evenement clavier
      lightBoxCard.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const bodyPhotographer = document.getElementById("main");
          const header = document.querySelector(".header");
          bodyPhotographer.style.display = "none";
          bodyPhotographer.setAttribute("aria-hidden", "true");
          header.style.display = "none";
          const lightBxMedia = Array.from(media);
          let MediaPhtgr = [];
          let i = 0;
          lightBxMedia.forEach((med) => {
            if (med.photographerId == id) {
              MediaPhtgr[i] = med;
              i++;
            }
          });
          // console.log(MediaPhtgr);
          let lightBox = new LightBox(MediaPhtgr);
          lightBox.show(e.currentTarget.dataset.id);
        }
      });
    });
  }
}

init();
