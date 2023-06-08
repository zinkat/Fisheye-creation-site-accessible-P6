function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id} = data;
    const picture = `./assets/photographers/${portrait}`;
    // const idphotographe = `${id}`;
    // console.log(idphotographe);

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        //article.classList.add("card-photographer");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `portrait du photographe ${name}`);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ", " +country;
        const p = document.createElement("p");
        p.textContent = tagline;
        const div = document.createElement("div");
        div.textContent = price +"€/jour";
        div.setAttribute("role", "prix par jour")

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(div);
        return (article);
    }
    return { name, picture, getUserCardDOM }
};
