class Bola {

    constructor() {
        this.radius = 30;
        this.x = mouse.x;
        this.y = mouse.y;
        this.startPosX = mouse.x;
        this.startPosY = mouse.y;

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.gravity = 1;
        this.friction = this.radius * 0.01;
        this.gravityAct = false;
    }



    update() {



            

        if(this.y + this.radius + this.velocity.y > canvas.height) {

            this.velocity.y = -this.velocity.y * (1 - this.friction);

        }



        this.velocity.y += this.gravity;
        this.y += this.velocity.y;
        // this.x += this.velocity.x;
        


        this.draw();
    }




    draw() {

        c.beginPath();
        c.fillStyle ="black";
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.closePath();

    }



}