function PhotographerFactoryDetail(data) {
    
    const { name, portrait, city, country, tagline, price, id} = data;
    //console.log(name);
    const picture = `./assets/photographers/${portrait}`
    

    function getUserCardDOM() {
        const article = document.querySelector('.photograph_infos' );
        const btnContact = document.querySelector('.contact_button')   

        const Pname = document.getElementById("modalTitle");
        Pname.textContent = name;

        const container_photo = document.createElement("figure");
        container_photo.classList.add("container_photo")
        const infosphotographe = document.createElement("figcaption");
        infosphotographe.setAttribute("aria-label", "information du photographe")
        infosphotographe.classList.add("infosphotographe");
       
        const photographerName = document.createElement('h1');
        photographerName.classList.add("photographerName");
        photographerName.setAttribute("aria-label", name)
        photographerName.setAttribute("title", "photographe")
        photographerName.setAttribute("tabindex", "0")
        photographerName.textContent = name;

        const photographerCity = document.createElement('address');
        photographerCity.setAttribute("aria-label", "Localisation géographique" + city+ "," +country)
        photographerCity.setAttribute("tabindex", "0")
        photographerCity.classList.add("photographerCity")
        photographerCity.textContent = city + ", " +country;
      
        const slogan = document.createElement("p");
        slogan.setAttribute("aria-label", "slogan du photographe" + tagline)
        slogan.setAttribute("tabindex", "0")
        slogan.classList.add("slogan")
        slogan.textContent = tagline;

        const divPortrait = document.createElement("div");
        divPortrait.classList.add("divPortrait");
        
        const img = document.createElement('img');
        img.classList.add("img_photographe");
        img.setAttribute("tabindex", "0")
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

    return { name, picture, getUserCardDOM }
  
};


function mediaPhotographerFactory(media) { 
    
    const {id, photographerId, title, image, likes, date, price, video} = media;
    const mediaphotographer = `./assets/images/${image} `;
    const videophotographer =  `./assets/images/${video}`;
    //console.log(mediaphotographer);
    //const likesphotographer = parseInt(`${likes}`);
   
  
    function getUserCardMedia(){
        
        const photographerMediaSection = document.querySelector(".photographermedia_section")
        const mediaLink = document.createElement("a");
        mediaLink.classList.add("media-link");
        // mediaLink.setAttribute("aria-label", `${title} vue en pleine ecran`);
        mediaLink.setAttribute("tabindex", `1`);
        const articleMedia = document.createElement('article')
        articleMedia.classList.add('article_media')
        const divMedia = document.createElement('div')
        divMedia.classList.add('div_media')
        divMedia.setAttribute('data-id',`${this.id}`);
       // divMedia.setAttribute('data-image',`${mediaphotographer}`);
        //divMedia.setAttribute('data-video',`${videophotographer}`);
        const infoPhoto = document.createElement('div')
        infoPhoto.classList.add('infoPhoto')
        
        const titlePhoto = document.createElement('h2');
        titlePhoto.classList.add('titlePhoto');
        titlePhoto.textContent = `${title}`;
        const nbLikePhoto = document.createElement('div')
        nbLikePhoto.classList.add('like')
        const heart = document.createElement('span')
        heart.classList.add('heart')
        heart.setAttribute("role", "button")
        heart.setAttribute("aria-label", "cliquez pour aimer")
        heart.setAttribute("tabindex", "0")
        heart.textContent = '❤'
        
        nbLikePhoto.innerHTML = `${likes} `
console.log(image);
            if(image){
                    const img = document.createElement('img');
                    mediaLink.href = `#`
                    img.setAttribute("src", mediaphotographer);
                    img.setAttribute("alt", title + ". Cliquez pour agrandir la Photo. vue rapprochée")
                    img.setAttribute("title", title)
                    img.setAttribute("tabindex", 0)
                    img.setAttribute("role", "link")
                    img.classList.add("photo");
                    divMedia.appendChild(mediaLink);
                    mediaLink.appendChild(img);
                }
            if(video){
                    const video = document.createElement("video");
                    mediaLink.href = "#"
                    video.classList.add("photo")
                    video.setAttribute("src",videophotographer )
                    video.controls = true
                    video.setAttribute("preload", "metadata");
                    video.setAttribute("alt", title + ". Cliquez pour agrandir la video. vue rapprochée")
                    video.setAttribute("title", title)
                    video.setAttribute("role", "link")
                    video.setAttribute("tabindex", 0)
                    divMedia.appendChild(mediaLink);
                    mediaLink.appendChild(video);
                }  
                    photographerMediaSection.appendChild(articleMedia);
                    articleMedia.appendChild(divMedia);
    
        //mediaLink.appendChild(articleMedia);
        articleMedia.appendChild(infoPhoto);
        infoPhoto.appendChild(titlePhoto);
        infoPhoto.appendChild(nbLikePhoto)
        infoPhoto.appendChild(heart);

   

    }

    return { id, photographerId, getUserCardMedia }
    
};

function countLikes(totalLikes) {
    
    //console.log(totalLikes); 

    const iconHeart = document.createElement("span")
    iconHeart.classList.add("iconHeart");
    const likesDOM = document.createElement("div");
    likesDOM.classList.add("TotalLikes");
    iconHeart.textContent = ' ❤'
    likesDOM.textContent = `${totalLikes}`;

    let displayLike = document.querySelector('.infoPrixAvis')
    displayLike.appendChild(iconHeart)
    displayLike.appendChild(likesDOM);

}
