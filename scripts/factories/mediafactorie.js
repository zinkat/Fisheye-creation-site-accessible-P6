/* eslint-disable no-undef */ 
/* eslint-disable no-unused-vars */ 
function photographerFactoryDetail(data) {
  const { name, portrait, city, country, tagline, price} = data;
  const picture = `./assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.querySelector(".photograph_infos");
    const btnContact = document.querySelector(".contact_button");

    const Pname = document.getElementById("modalTitle");
    Pname.textContent = name;

    const container_photo = document.createElement("figure");
    container_photo.classList.add("container_photo");
    const infosphotographe = document.createElement("figcaption");

    infosphotographe.setAttribute("aria-label", "information du photographe");
    infosphotographe.classList.add("infosphotographe");

    const photographerName = document.createElement("h1");
    photographerName.classList.add("photographerName");
    photographerName.setAttribute("aria-label", name);
    photographerName.setAttribute("title", "photographe");
    photographerName.setAttribute("tabindex", "0");
    photographerName.textContent = name;

    const photographerCity = document.createElement("address");
    photographerCity.setAttribute("aria-label", "Localisation géographique");
    photographerCity.setAttribute("tabindex", "0");
    photographerCity.classList.add("photographerCity");
    photographerCity.textContent = city + ", " + country;

    const slogan = document.createElement("blockquote");
    slogan.setAttribute("tabindex", "0");
    slogan.classList.add("slogan");
    slogan.textContent = tagline;

    const divPortrait = document.createElement("div");
    divPortrait.classList.add("divPortrait");

    const img = document.createElement("img");
    img.classList.add("img_photographe");
    img.setAttribute("tabindex", "0");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `portrait du photographe ${name}`);

    article.appendChild(container_photo);
    container_photo.appendChild(infosphotographe);
    infosphotographe.appendChild(photographerName);
    infosphotographe.appendChild(photographerCity);
    infosphotographe.appendChild(slogan);
    container_photo.appendChild(btnContact);
    container_photo.appendChild(divPortrait);
    divPortrait.appendChild(img);

    const infoPrixAvis = document.createElement("aside");
    infoPrixAvis.classList.add("infoPrixAvis");
    const priceDOM = document.createElement("div");
    priceDOM.classList.add("artistePrice");
    priceDOM.textContent = `${price} € / jour`;
    infoPrixAvis.appendChild(priceDOM);
    main.appendChild(infoPrixAvis);

    return article;
  }

  return {
    name,
    picture,
    getUserCardDOM,
  };
}

function mediaPhotographerFactory(media) {
  const { id, photographerId, title, image, likes, video } = media;
  const mediaphotographer = `./assets/images/${image} `;
  const videophotographer = `./assets/images/${video}`;

  function getUserCardMedia() {
    const photographerMediaSection = document.querySelector(
      ".photographermedia_section"
    );
    const mediaLink = document.createElement("a");
    mediaLink.classList.add("media-link");
    mediaLink.setAttribute("aria-label", `${title} vue en pleine ecran`);
    const articleMedia = document.createElement("article");
    articleMedia.classList.add("article_media");
    const divMedia = document.createElement("div");
    divMedia.classList.add("div_media");
    divMedia.setAttribute("data-id", `${this.id}`);
    const infoPhoto = document.createElement("div");
    infoPhoto.classList.add("infoPhoto");

    const titlePhoto = document.createElement("h2");
    titlePhoto.classList.add("titlePhoto");
    titlePhoto.textContent = `${title}`;
    const nbLikePhoto = document.createElement("div");
    nbLikePhoto.classList.add("like");
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.setAttribute("role", "button");
    heart.setAttribute("aria-label", "cliquez pour aimer" + title);
    heart.setAttribute("tabindex", "0");
    heart.textContent = "❤";

    nbLikePhoto.innerHTML = `${likes} `;
    if (image) {
      const img = document.createElement("img");
      img.setAttribute("src", mediaphotographer);
      img.setAttribute("alt", "Cliquez pour agrandir la Photo" + title);
      img.setAttribute("tabindex", 0);
      img.setAttribute("role", "link");
      img.classList.add("photo");
      divMedia.appendChild(mediaLink);
      mediaLink.appendChild(img);
    }
    if (video) {
      const video = document.createElement("video");
      video.classList.add("photo");
      video.setAttribute("src", videophotographer);
      video.controls = true;
      video.setAttribute("preload", "metadata");
      video.setAttribute("alt", "Cliquez pour agrandir la video" + title);
      video.setAttribute("title", title);
      video.setAttribute("role", "link");
      video.setAttribute("tabindex", 0);
      divMedia.appendChild(mediaLink);
      mediaLink.appendChild(video);
    }
    photographerMediaSection.appendChild(articleMedia);
    articleMedia.appendChild(divMedia);
    articleMedia.appendChild(infoPhoto);
    infoPhoto.appendChild(titlePhoto);
    infoPhoto.appendChild(nbLikePhoto);
    infoPhoto.appendChild(heart);
  }

  return {
    id,
    photographerId,
    getUserCardMedia,
  };
}

///////calcule total like
function countLikes(totalLikes) {
  const iconHeart = document.createElement("span");
  iconHeart.classList.add("iconHeart");
  const likesDOM = document.createElement("div");
  likesDOM.classList.add("TotalLikes");
  iconHeart.textContent = " ❤";
  likesDOM.textContent = `${totalLikes}`;

  let displayLike = document.querySelector(".infoPrixAvis");
  displayLike.appendChild(iconHeart);
  displayLike.appendChild(likesDOM);
}
/////// ********ajouter des likes  onclick********///////
function addLikes() {
  let parentLikes = document.querySelectorAll(".infoPhoto");
  let popUpLikes = document.querySelector(".TotalLikes");

  // boucle sur les media du photographer
  parentLikes.forEach(function (child) {
    let totalLikesPhoto = child.childNodes[1].textContent;
    let countLike = 0;
    let likeBtn = child.childNodes[2];
    // ecouter l'evenement
    likeBtn.addEventListener("click", LikingEvent);

    function LikingEvent() {
      countLike = countLike + 1;
      child.childNodes[1].textContent = parseInt(totalLikesPhoto) + countLike;
      //mise à jour ttl likes dans la balise
      totalLikes = parseInt(popUpLikes.textContent) + countLike;
      popUpLikes.textContent = `${totalLikes}`;
      likeBtn.removeEventListener("click", LikingEvent);
      likeBtn.removeEventListener("keydown", keyEvent);
    }
    //////keyboard ecouter le clavier
    likeBtn.addEventListener("keydown", keyEvent);

    function keyEvent(e) {
      if (e.key === "Enter") {
        LikingEvent();
      }
    }
  });
}
