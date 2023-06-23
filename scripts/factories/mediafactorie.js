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
        infosphotographe.classList.add("infosphotographe");
       
        const photographerName = document.createElement('h2');
        photographerName.classList.add("photographerName");
        photographerName.textContent = name;

        const photographerCity = document.createElement('address');
        photographerCity.classList.add("photographerCity")
        photographerCity.textContent = city + ", " +country;

        const slogan = document.createElement("p");
        slogan.classList.add("slogan")
        slogan.textContent = tagline;

        const divPortrait = document.createElement("div");
        divPortrait.classList.add("divPortrait");
        
        const img = document.createElement('img');
        img.classList.add("img_photographe");
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
    //const likesphotographer = parseInt(`${likes}`);
   
  
    function getUserCardMedia(){
        
        const photographerMediaSection = document.querySelector(".photographermedia_section")
        const mediaLink = document.createElement("a");
        mediaLink.classList.add("media-link");
        mediaLink.setAttribute("aria-label", `${title} vue en pleine ecran`);
        const articleMedia = document.createElement('article')
        articleMedia.classList.add('article_media')
        const divMedia = document.createElement('div')
        divMedia.classList.add('div_media')
        divMedia.setAttribute('data-id',`${this.id}`);
        divMedia.setAttribute('data-image',`${mediaphotographer}`);
        const infoPhoto = document.createElement('div')
        infoPhoto.classList.add('infoPhoto')
        
        const titlePhoto = document.createElement('h3');
        titlePhoto.classList.add('titlePhoto');
        titlePhoto.textContent = `${title}`;
        const nbLikePhoto = document.createElement('div')
        nbLikePhoto.classList.add('like')
        const heart = document.createElement('span')
        heart.classList.add('heart')
        heart.textContent = '❤'
        
        nbLikePhoto.innerHTML = `${likes} `

            if(image){
                    const img = document.createElement('img');
                    mediaLink.href = `#`
                    img.setAttribute("src", mediaphotographer);
                    img.setAttribute("alt", title)
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
                    video.setAttribute("alt", title)
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
