function PhotographerFactoryDetail(data) {
    const { name, portrait, city, country, tagline, price, id} = data;
    console.log(name);
    const picture = `./assets/photographers/${portrait}`
    // const datajs =[
    //     photographers ={
    //         name, portrait, city, country, tagline, price, id
    //     },
    //   media={
    //     portrait, city, country, tagline, price, id
    //   },
    // ]
    // console.log(datajs);
    function getUserCardDOM() {
        const article = document.querySelector('.photograph_infos' );
        const btnContact = document.querySelector('.contact_button')   

       //nom photographer form
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

        

        //pop
        const prix = document.createElement("p");
        prix.classList.add("prix")
        prix.textContent = price +"€/jour";
       

        return article;
    }
    return { name, picture, getUserCardDOM }
};

function mediaPhotographerFactory(PhotographerName,media) {
    const {id, photographerId, title, image, likes, date, price, video} = media;
    const mediaphotographer = `./assets/images/${PhotographerName}/${image}`;
   // const videophotographer =  `./assets/images/${PhotographerName}/${video}`;
    //console.log(videophotographer);
    function getUserCardMedia(){
        const photographerMediaSection = document.querySelector(".photographermedia_section")
        const articleMedia = document.createElement('article')
        articleMedia.classList.add('article_media')
        const divMedia = document.createElement('div')
        divMedia.classList.add('div_media')
        const infoPhoto = document.createElement('div')
        infoPhoto.classList.add('infoPhoto')
        
        const titlePhoto = document.createElement('h3');
        titlePhoto.classList.add('titlePhoto');
        titlePhoto.textContent = `${title}`;
        const nbLikePhoto = document.createElement('p')
        nbLikePhoto.classList.add('like')
        nbLikePhoto.innerHTML = `${likes} &#10084;`



        const img = document.createElement('img');
        img.setAttribute("src", mediaphotographer);
        img.classList.add("photo")

        // const video = document.createElement("video");
        // video.classList.add("photo")
        // video.setAttribute("src",videophotographer )

        photographerMediaSection.appendChild(articleMedia);
        articleMedia.appendChild(divMedia);
        divMedia.appendChild(img);
        // divMedia.appendChild(video);
        articleMedia.appendChild(infoPhoto);
        infoPhoto.appendChild(titlePhoto);
        infoPhoto.appendChild(nbLikePhoto);
      
    }
   

    function getUserCardMediaVideo(){

      
    }
    return { id, photographerId,  getUserCardMedia, getUserCardMediaVideo }


};