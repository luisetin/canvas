class Padel{
    constructor(id) {
        this.width = 30;
        this.height = 100;
        this.x = 50;
        this.y = innerHeight / 2;
        this.id = id;
        this.dy = 10;

    }

    update() {





        //controlar bordes arriba abajo
        if(this.y <= 0)
            this.y = 0;

            //no va 
        if(getDistance(this.x,this.y, pelota.x, pelota.y) <= 0)
            console.log("a")





        this.draw();
    }



    move(tecla) {
        if(this.id == "jugador") {
            if(tecla == "up")
                this.y -= this.dy;
            if(tecla == "down")
                this.y += this.dy;

        }
    }

    draw() {

        //jugador
        if(this.id == "jugador") {
            c.fillStyle = "black";
            c.fillRect(this.x,this.y - this.height/2,this.width,this.height);
        }








        if(this.id == "bot") {
            c.fillStyle = "black";
            c.fillRect(innerWidth - this.x,this.y - this.height/2,this.width,this.height);
        }

        
    }


}