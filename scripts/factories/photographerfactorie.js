function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id} = data;
    const picture = `./assets/photographers/${portrait}`


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("card_photographer");
     

        const container_photo = document.createElement("figure");
        container_photo.classList.add("container_photo")

        const divPortrait = document.createElement("div");
        divPortrait.classList.add("divPortrait");

        const img = document.createElement('img');
        img.classList.add("img_photographe");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `portrait du photographe ${name}`);

        const infosphotographe = document.createElement("figcaption");
        infosphotographe.classList.add("infosphotographe");
       
        const photographerName = document.createElement('h2');
        photographerName.classList.add("photographerName");
        photographerName.textContent = name;

        const photographerCity = document.createElement('address');
        photographerCity.classList.add("photographerCity")
        photographerCity.setAttribute("tabindex", "0")
        photographerCity.setAttribute("aria-label", "Localisation géographique" + city+ "," +country)
        photographerCity.textContent = city + ", " +country;

        const slogan = document.createElement("blockquote");
        slogan.classList.add("slogan")
        slogan.setAttribute("tabindex", "0")
        slogan.textContent = tagline;

        const prix = document.createElement("p");
        prix.setAttribute("tabindex", "0")
        prix.classList.add("prix")
        prix.textContent = price +"€/jour";

    
        const pagePhotographer = document.createElement("a");
        pagePhotographer.classList.add("lienPage");
        pagePhotographer.setAttribute("aria-label", `${name}`);
        pagePhotographer.href = `photographer.html?id=${id}`;
        pagePhotographer.setAttribute("aria-label",`Lien vers le portfolio de ${name}`);

        article.appendChild(container_photo);
         
        container_photo.appendChild(pagePhotographer)
        container_photo.appendChild(infosphotographe);

        pagePhotographer.appendChild(divPortrait);
        divPortrait.appendChild(img);
        pagePhotographer.appendChild(photographerName);
  

        infosphotographe.appendChild(photographerCity);
        infosphotographe.appendChild(slogan);
        infosphotographe.appendChild(prix);


        return article;
    }

    return { name, picture, getUserCardDOM }
};


    
