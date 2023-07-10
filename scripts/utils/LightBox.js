class LightBox {
  constructor(listElement) {
    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
  }

  show(id) {
    for (let i = 0; i < this.listElement.length; i++) {
      if (this.listElement[i].id === parseInt(id)) {
        this.currentElement = this.getElementById(id);
        this.display(this.listElement[i]);
      }
    }
  }
  /// btn photo suivante
  next() {
    let index = this.listElement.findIndex(
      (element) => element.id == this.currentElement.id
    );

    if (index == 0) {
      this.currentElement = this.listElement[index + 1];
      console.log(index + 1);
    } else if (index == this.listElement.length - 1) {
      this.currentElement = this.listElement[0];
    } else {
      this.currentElement = this.listElement[index + 1];
    }

    this.display(this.currentElement);
  }

  /// btn photo précédente
  previous() {
    let index = this.listElement.findIndex(
      (element) => element.id == this.currentElement.id
    );
    //console.log(index);

    if (index == 0) {
      this.currentElement = this.listElement[this.listElement.length - 1];
    } else {
      this.currentElement = this.listElement[index - 1];
    }

    this.display(this.currentElement);
  }
  //gestion event btn ligthbox
  manageEvent() {
    document.querySelector("#lightbox .next").addEventListener("click", () => {
      this.next();
    });

    document
      .querySelector("#lightbox .previous")
      .addEventListener("click", () => {
        this.previous();
      });

    document
      .querySelector("#lightbox .closeLight")
      .addEventListener("click", () => {
        this.close();
      });
    ///event clavier
    document.querySelector("#lightbox").addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });

    // document.querySelector("#lightbox").addEventListener("click", (e) => {
    //     if(e.target == e.currentTarget)
    //     this.close();

    // })

    document.querySelector("#lightbox").addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.next();

          break;

        case "ArrowLeft":
          this.previous();
          break;

        case "Escape":
          this.close();
          break;
      }
    });
  }

  getElementById(id) {
    return this.listElement.find((element) => element.id == id);
  }
  ///affichage ligthbox
  display(boxmedia) {
    let actualImage = boxmedia.image;
    let actualVideo = boxmedia.video;
    let actualTitle = boxmedia.title;
    document.querySelector(".TitreMed").textContent = actualTitle;
    document.querySelector(".TitreMed").setAttribute("title", actualTitle);

    if (typeof actualImage !== "undefined") {
      document.querySelector(".picture").style.display = "block";
      document.querySelector(".mp4").style.display = "none";
      const mediaphotographer = `./assets/images/${boxmedia.image}`;
      const cardBox = document.querySelector(".picture");
      cardBox.setAttribute("alt", actualTitle);
      cardBox.setAttribute("src", mediaphotographer);
      cardBox.setAttribute("aria-label", `vue en pleine ecran ${actualTitle}`);
    }
    if (typeof actualVideo !== "undefined") {
      document.querySelector(".picture").style.display = "none";
      document.querySelector(".mp4").style.display = "block";
      const mediaphotographerV = `./assets/images/${boxmedia.video}`;
      const cardBoxV = document.querySelector(".mp4");
      cardBoxV.controls = true;
      cardBoxV.setAttribute("preload", "metadata");
      cardBoxV.setAttribute("src", mediaphotographerV);
      cardBoxV.setAttribute("aria-label", `vue en pleine ecran ${actualTitle}`);
    }

    document.querySelector("#lightbox").classList.add("show");
  }
  ////fermeture ligthbox
  close() {
    document.querySelector("#lightbox").classList.remove("show");
    const bodyPhotographer = document.getElementById("main");
    bodyPhotographer.style.display = "block";
    bodyPhotographer.setAttribute("aria-hidden", "false");
    document.querySelector(".header").style.display = "block";
    document.querySelector(".photograph-header").setAttribute("tabindex", "0");
  }
}
