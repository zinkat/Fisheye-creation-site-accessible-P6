class LightBox {
    constructor(listElement){
        this.currentElement = null;
        this.listElement = listElement;
        this.manageEvent();
    }

    
    show(id) {
    
        for (let i=0; i<this.listElement.length; i++){
            //console.log(this.listElement[i].id);
            if (this.listElement[i].id === parseInt(id)){
                this.currentElement = this.getElementById(id);
                this.display(this.listElement[i].image); 
            }
       
        }
        
    }

    next() {
     let index =  this.listElement.findIndex(element => element.id == this.currentElement.id);

         if(index == 0){
            this.currentElement = this.listElement[index + 1];
            console.log(index + 1);
         }
         else if (index == this.listElement.length-1){
            this.currentElement = this.listElement[0]
         }
         else {
            this.currentElement = this.listElement[index + 1 ];
         }

     this.display(this.currentElement.image);
    }


    previous() {
     let index =  this.listElement.findIndex(element => element.id == this.currentElement.id);
     console.log(index);

            if(index == 0){
                this.currentElement = this.listElement[this.listElement.length - 1];
            }
 
            else {
                this.currentElement = this.listElement[index - 1 ];
            }
     
     this.display(this.currentElement.image);
    }

    manageEvent() {

        document.querySelector("#lightbox .next").addEventListener("click", () => {
            this.next();
        })
        document.querySelector("#lightbox .previous").addEventListener("click", () => {
            this.previous();
    
        })

        document.querySelector("#lightbox .closeLight").addEventListener("click", () => {
            this.close();
    
        })

        document.querySelector("#lightbox").addEventListener("click", (e) => {
            if(e.target == e.currentTarget)
            this.close();
    
        })

        document.querySelector("#lightbox").addEventListener("keyup",(event) => {

            switch (event.key){
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
       return this.listElement.find(element=> element.id == id);
   }

   display(image){ 
   const mediaphotographer = `./assets/images/${image}` ?? `./assets/images/${video}`;
   const cardBox = document.querySelector(".picture")
   cardBox.setAttribute("src", mediaphotographer)
    document.querySelector("#lightbox").classList.add("show");
   }
   
   close(){
    document.querySelector("#lightbox").classList.remove("show");
   }

}

